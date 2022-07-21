#!/bin/bash

echo "Starting init script" >> /tmp/init-script.log 2>&1

# Environment variables to configure each server
echo "Setting up environment variables" >> /tmp/init-script.log 2>&1
SURVEY_TYPE="asymmetric"
ASSIGNED_LIB="tpm2-tools v5.0"
SERVER_NAME="salmiakki"
POSTGRES_PASSWORD="PASSWORD"
echo "SURVEY_TYPE=${SURVEY_TYPE}" >> /etc/environment
echo "ASSIGNED_LIB=${ASSIGNED_LIB}" >> /etc/environment
echo "SERVER_NAME=${SERVER_NAME}" >> /etc/environment

# Create SSH key
echo "Creating SSH keys" >> /tmp/init-script.log 2>&1
cat << EOF > /root/.ssh/usability_study_instance.pub
# ******* SSH public key here
EOF

cat << EOF > /root/.ssh/usability_study_instance
# ******* SSH private key here
EOF

chmod 600 /root/.ssh/usability_study_instance

# Add SSH key to the ssh agent
echo "Adding SSH keys to the ssh-agent" >> /tmp/init-script.log 2>&1
eval `ssh-agent -s` >> /tmp/init-script.log 2>&1
ssh-add /root/.ssh/usability_study_instance >> /tmp/init-script.log 2>&1

echo "Storing server's IP" >> /tmp/init-script.log 2>&1
ip4_addr=$(/sbin/ip -o -4 addr list eth0 | awk '{print $4}' | cut -d/ -f1)
echo "Server IP is ${ip4_addr}" >> /tmp/init-script.log 2>&1
echo "SERVER_IP=${ip4_addr}" >> /etc/environment


## Create swap so that npm install doesn't run out of memory
echo "Creating swapfile so npm installs don't fail" >> /tmp/init-script.log 2>&1
fallocate -l 1G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
swapon --show
cp /etc/fstab /etc/fstab.bak
echo '/swapfile none swap sw 0 0' | tee -a /etc/fstab
sysctl vm.swappiness=10
echo 'vm.swappiness=10' | tee -a /etc/sysctl.conf
sysctl vm.vfs_cache_pressure=50
echo 'vm.vfs_cache_pressure=50' | tee -a /etc/sysctl.conf


USABILITY_DIR="/root/usability_study"
echo "Creating main directory" >> /tmp/init-script.log 2>&1
mkdir -p ${USABILITY_DIR} >> /tmp/init-script.log 2>&1
cd ${USABILITY_DIR}

# Set up TPM emulator
echo "Setting up TPM simulator" >> /tmp/init-script.log 2>&1
mkdir -p ./tpm2simulator >> /tmp/init-script.log 2>&1

sudo apt update >> /tmp/init-script.log 2>&1
sudo apt -y install automake autoconf \
  bash coreutils expect libtool sed \
  fuse fuse net-tools python3 python3-twisted \
  selinux-policy-dev tpm-tools gnutls-bin \
  libgnutls28-dev libtasn1-6-dev libtasn1-bin \
  pkg-config build-essential socat libseccomp-dev \
  libssl-dev python3-setuptools kmod nodejs npm >> /tmp/init-script.log 2>&1

sudo apt -y install automake autoconf coreutils libfuse-dev \
  libglib2.0-dev libgmp-dev expect libtasn1-dev socat \
  python3-twisted gnutls-dev gnutls-bin >> /tmp/init-script.log 2>&1

# Get and install libtpms
curl -fSsL "https://github.com/stefanberger/libtpms/archive/v0.7.4.tar.gz" -o /tmp/libtpmsv0.7.4.tar.gz && \
  mkdir ./tpm2simulator/libtpms && \
  tar -xf /tmp/libtpmsv0.7.4.tar.gz -C ./tpm2simulator/libtpms/ && \
  rm -rf /tmp/* >> /tmp/init-script.log 2>&1

cd ./tpm2simulator/libtpms/libtpms-0.7.4/
./autogen.sh --with-tpm2 --with-openssl --prefix=/usr >> /tmp/init-script.log 2>&1
make -j$(nproc) >> /tmp/init-script.log 2>&1
make -j$(nproc) check >> /tmp/init-script.log 2>&1
make install >> /tmp/init-script.log 2>&1
ldconfig  >> /tmp/init-script.log 2>&1
make clean >> /tmp/init-script.log 2>&1

cd ${USABILITY_DIR}/

# Get and install swtpm
curl -fSsL "https://github.com/stefanberger/swtpm/archive/v0.5.0.tar.gz" -o /tmp/swtpmv0.5.0.tar.gz && \
  mkdir ./tpm2simulator/swtpm && \
  tar -xf /tmp/swtpmv0.5.0.tar.gz -C ./tpm2simulator/swtpm/ && \
  rm -rf /tmp/* >> /tmp/init-script.log 2>&1

cd ./tpm2simulator/swtpm/swtpm-0.5.0/
./autogen.sh --with-openssl --prefix=/usr >> /tmp/init-script.log 2>&1
make -j$(nproc) >> /tmp/init-script.log 2>&1
make -j$(nproc) >> /tmp/init-script.log 2>&1
make install >> /tmp/init-script.log 2>&1
ldconfig >> /tmp/init-script.log 2>&1
make clean >> /tmp/init-script.log 2>&1

# Create tpm init scripts
echo "Creating scripts to manage the TPM simulator" >> /tmp/init-script.log 2>&1
cd ${USABILITY_DIR}/tpm2simulator/

echo "Creating reset_tpm.sh" >> /tmp/init-script.log 2>&1
cat << EOF > reset_tpm.sh
#!/bin/bash
systemctl stop tpm-simulator.service
/bin/rm -rf /root/usability_study/tpm2simulator/mytpm
/bin/mkdir /root/usability_study/tpm2simulator/mytpm
systemctl start tpm-simulator.service
/root/usability_study/tpm2simulator/extend_measurements.sh
EOF
chmod +x reset_tpm.sh


echo "Creating restart_tpm.sh" >> /tmp/init-script.log 2>&1
cat << EOF > restart_tpm.sh
#!/bin/bash
systemctl restart tpm-simulator.service && /root/usability_study/tpm2simulator/extend_measurements.sh
EOF
chmod +x restart_tpm.sh


echo "Creating extend_measurements.sh" >> /tmp/init-script.log 2>&1
cat << EOF > extend_measurements.sh
#!/bin/bash
docker exec -t judge0_workers_1 tpm2_pcrevent 0 /api/docker-entrypoint.sh
docker exec -t judge0_workers_1 tpm2_pcrevent 1 /api/Gemfile
docker exec -t judge0_workers_1 tpm2_pcrevent 2 /api/Rakefile
docker exec -t judge0_workers_1 tpm2_pcrevent 3 /judge0.conf
EOF
chmod +x extend_measurements.sh



# Create systemd service for TPM simulator
echo "Creating systemd service for the TPM simulator" >> /tmp/init-script.log 2>&1
cat << EOF > /etc/systemd/system/tpm-simulator.service
[Unit]
Description=TPM2 Simulator

[Service]
Restart=always
RestartSec=5
StandardOutput=syslog

# Location of files
ExecStart=/usr/bin/swtpm chardev --vtpm-proxy --tpmstate dir=/root/usability_study/tpm2simulator/mytpm --tpm2 --ctrl type=tcp,port=2322

ExecStartPre=-/usr/sbin/modprobe tpm_vtpm_proxy
ExecStartPre=-/bin/mkdir /root/usability_study/tpm2simulator/mytpm

# User to run as, usually it's a good idea to not use root
User=root

[Install]
WantedBy=multi-user.target
EOF


sudo systemctl daemon-reload  >> /tmp/init-script.log 2>&1
sudo systemctl enable tpm-simulator.service >> /tmp/init-script.log 2>&1
sudo systemctl start tpm-simulator.service >> /tmp/init-script.log 2>&1
sudo systemctl status tpm-simulator.service >> /tmp/init-script.log 2>&1

## Code for setting up the TPM manager application
echo "Creating tpm-manager Flask application" >> /tmp/init-script.log 2>&1
cat << EOF > tpm-manager.py
import subprocess
import shlex
import shutil

from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route("/restart_tpm", methods=["POST"])
def restart_tpm():
    response = {}
    try:
        restart_tpm_cmd = shlex.split("/root/usability_study/tpm2simulator/restart_tpm.sh")
        read_key_output = subprocess.check_output(
            restart_tpm_cmd, stderr=subprocess.STDOUT)
        response = jsonify({'result': True})
        response.status_code = 200
    except Exception as e:
        response = jsonify({"result": False, "error": str(e)})
        response.status_code = 500
    return response


@app.route("/reset_tpm", methods=["POST"])
def reset_tpm():
    response = {}
    try:
        reset_tpm_cmd = shlex.split("/root/usability_study/tpm2simulator/reset_tpm.sh")
        read_key_output = subprocess.check_output(
            reset_tpm_cmd, stderr=subprocess.STDOUT)
        response = jsonify({'result': True})
        response.status_code = 200
    except Exception as e:
        response = jsonify({"result": False, "error": str(e)})
        response.status_code = 500
    return response
EOF

sudo apt-get install -y python3 python3-pip >> /tmp/init-script.log 2>&1
pip3 install flask flask-cors uwsgi gunicorn >> /tmp/init-script.log 2>&1

#Flask server flask server rpc needs systemd (TPM-manager.py)

echo "Creating systemd service for tpm-manager Flask application" >> /tmp/init-script.log 2>&1
cat << EOF > /etc/systemd/system/tpm-manager.service
[Unit]
Description=TPM manager flask


[Service]
Restart=always
RestartSec=5
StandardOutput=syslog

WorkingDirectory=/root/usability_study/tpm2simulator/
ExecStart=/usr/local/bin/gunicorn --workers 3 --bind 127.0.0.1:4000 --access-logfile - tpm-manager:app


# User to run as, usually it's a good idea to not use root
User=root

[Install]
WantedBy=multi-user.target
EOF


sudo systemctl daemon-reload >> /tmp/init-script.log 2>&1
sudo systemctl enable tpm-manager.service >> /tmp/init-script.log 2>&1
sudo systemctl start tpm-manager.service >> /tmp/init-script.log 2>&1
sudo systemctl status tpm-manager.service >> /tmp/init-script.log 2>&1


# Set up judge0
echo "Setting up judge0" >> /tmp/init-script.log 2>&1
cd ${USABILITY_DIR}
# Install docker
sudo apt-get remove docker docker-engine docker.io containerd runc  >> /tmp/init-script.log 2>&1
sudo apt-get -y install \
  apt-transport-https \
  ca-certificates \
  curl \
  gnupg-agent \
  software-properties-common >> /tmp/init-script.log 2>&1
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add - >> /tmp/init-script.log 2>&1
sudo apt-key fingerprint 0EBFCD88 >> /tmp/init-script.log 2>&1
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable" >> /tmp/init-script.log 2>&1
sudo apt-get update >> /tmp/init-script.log 2>&1
sudo apt-get -y install docker-ce docker-ce-cli containerd.io >> /tmp/init-script.log 2>&1

# Install docker-compose
sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version >> /tmp/init-script.log 2>&1

# Install judge0
cd ${USABILITY_DIR}
# How to make sure that the RSA fingerprint is trusted automatically? make sure we have permissions
GIT_SSH_COMMAND='ssh -i /root/.ssh/usability_study_instance' git clone git@github.com:nokia/judge0.git >> /tmp/init-script.log 2>&1
cd judge0
docker build -t judge0/judge0:1.12.0 . >> /tmp/init-script.log 2>&1
docker-compose up -d db redis >> /tmp/init-script.log 2>&1
sleep 10  >> /tmp/init-script.log 2>&1
docker-compose up -d --build >> /tmp/init-script.log 2>&1

# Install node
sudo apt-get -y install nodejs >> /tmp/init-script.log 2>&1
npm install -g @angular/cli >> /tmp/init-script.log 2>&1
npm install pm2 -g >> /tmp/init-script.log 2>&1
npm install http-server -g >> /tmp/init-script.log 2>&1


# Install the ide
echo "Setting up the IDE" >> /tmp/init-script.log 2>&1
cd ${USABILITY_DIR}
GIT_SSH_COMMAND='ssh -i /root/.ssh/usability_study_instance' git clone git@github.com:nokia/ide.git >> /tmp/init-script.log 2>&1
sed -i "1 c\
var SERVER_NAME = \"$SERVER_NAME\";" ${USABILITY_DIR}/ide/js/ide.js

### Systemd service for the IDE

cat << EOF > /etc/systemd/system/tpm-ide.service
[Unit]
Description=IDE manager


[Service]
Restart=always
RestartSec=5
StandardOutput=syslog

WorkingDirectory=/root/usability_study/ide/
ExecStart=/usr/local/bin/http-server -S -C /etc/letsencrypt/live/usable-tpm.site/fullchain.pem --key /etc/letsencrypt/live/usable-tpm.site/privkey.pem -p 5000 -o


# User to run as, usually it's a good idea to not use root
User=root

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl daemon-reload >> /tmp/init-script.log 2>&1
sudo systemctl enable tpm-ide.service >> /tmp/init-script.log 2>&1
sudo systemctl start tpm-ide.service >> /tmp/init-script.log 2>&1
sudo systemctl status tpm-ide.service >> /tmp/init-script.log 2>&1

# Install mongodb
# wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
# echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
sudo apt-get update >> /tmp/init-script.log 2>&1
sudo apt-get install -y mongodb >> /tmp/init-script.log 2>&1

sudo systemctl daemon-reload >> /tmp/init-script.log 2>&1
sudo systemctl enable mongodb >> /tmp/init-script.log 2>&1
sudo systemctl start mongodb >> /tmp/init-script.log 2>&1
sudo systemctl status mongodb >> /tmp/init-script.log 2>&1

# Install the survey app
echo "Setting up and installing the survey app" >> /tmp/init-script.log 2>&1
# Create certificate directory
mkdir -p /etc/letsencrypt/live/usable-tpm.site/ >> /tmp/init-script.log 2>&1

# Copy lets Encrypt certifcate content
cat << EOF > /etc/letsencrypt/live/usable-tpm.site/fullchain.pem
# ******* lets encrypt cert here
EOF

# Copy private keys content
cat << EOF > /etc/letsencrypt/live/usable-tpm.site/privkey.pem
# ******* lets encrypt key here
EOF

# Install SurveyApp
cd ${USABILITY_DIR}
GIT_SSH_COMMAND='ssh -i /root/.ssh/usability_study_instance' git clone git@github.com:nokia/tpm-study-environment.git >> /tmp/init-script.log 2>&1
cd tpm-study-environment

# Create local env files
cat << EOF > .env.local
MONGODB_URI="mongodb://localhost:27017"
MONGODB_DB=surveydb
NEXT_PUBLIC_SURVEY_TYPE=${SURVEY_TYPE}
NEXT_PUBLIC_SERVER_NAME=${SERVER_NAME}
NEXT_PUBLIC_ASSIGNED_LIB=${ASSIGNED_LIB}
HTTPS=true
SSL_CRT_FILE=/etc/letsencrypt/live/usable-tpm.site/fullchain.pem
SSL_KEY_FILE=/etc/letsencrypt/live/usable-tpm.site/privkey.pem
EOF

# Install SurveyApp dependencies and build the app
# npm install next react -g
npm install >> /tmp/init-script.log 2>&1
npm run build >> /tmp/init-script.log 2>&1

### Systemd service for the SurveyApp

cat << EOF > /etc/systemd/system/survey-app.service
[Unit]
Description=Survey App


[Service]
Restart=always
RestartSec=5
StandardOutput=syslog

WorkingDirectory=/root/usability_study/tpm-study-environment/
ExecStart=/usr/bin/npm run start


# User to run as, usually it's a good idea to not use root
User=root

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl daemon-reload >> /tmp/init-script.log 2>&1
sudo systemctl enable survey-app.service >> /tmp/init-script.log 2>&1
sudo systemctl start survey-app.service >> /tmp/init-script.log 2>&1
sudo systemctl status survey-app.service >> /tmp/init-script.log 2>&1


# Install and configure nginx 
sudo apt install -y nginx >> /tmp/init-script.log 2>&1

# Configure nginx 
cat << EOF > /etc/nginx/sites-available/default
### # Default server configuration

server {
	listen 443 ssl default_server;
  listen [::]:443 ssl default_server;
	root /var/www/html;
	index index.html index.htm;
	server_name _;

    # SSL configuration
    ssl_certificate /etc/letsencrypt/live/usable-tpm.site/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/usable-tpm.site/privkey.pem;

	location / {
		proxy_pass https://localhost:3443;
	}
}

server {
    listen          80;
    listen          [::]:80;
    return 301 https://\$host\$request_uri;
}

server {
    listen      8888 ssl;
    server_name _;

    # SSL configuration
    ssl_certificate /etc/letsencrypt/live/usable-tpm.site/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/usable-tpm.site/privkey.pem;

    location / {
        proxy_pass http://localhost:8880;
    }
}

server {
    listen      4004 ssl;
    server_name _;

    # SSL configuration
    ssl_certificate /etc/letsencrypt/live/usable-tpm.site/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/usable-tpm.site/privkey.pem;

    location / {
        proxy_pass http://localhost:4000;
    }
}
EOF


sudo systemctl daemon-reload >> /tmp/init-script.log 2>&1
sudo systemctl enable nginx >> /tmp/init-script.log 2>&1
sudo systemctl start nginx >> /tmp/init-script.log 2>&1
sudo systemctl status nginx  >> /tmp/init-script.log 2>&1
sudo systemctl restart nginx  >> /tmp/init-script.log 2>&1
sudo systemctl status nginx  >> /tmp/init-script.log 2>&1

## Create this directory for nginx in case it doesn't exist
mkdir -p /var/www/html >> /tmp/init-script.log 2>&1