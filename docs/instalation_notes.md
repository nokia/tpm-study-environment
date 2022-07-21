Setting up judge0 for TPM Usability Study
=========================================

- [Setting up judge0 for TPM Usability Study](#setting-up-judge0-for-tpm-usability-study)
  - [Introduction](#introduction)
  - [Setting up the TPM emulator](#setting-up-the-tpm-emulator)
  - [Setting up judge0](#setting-up-judge0)
    - [Install dependencies](#install-dependencies)
    - [Disable telemetry](#disable-telemetry)
    - [Start the docker containers](#start-the-docker-containers)
  - [Set up IDE](#set-up-ide)
  - [Viewing submissions (source code and output).](#viewing-submissions-source-code-and-output)
- [Starting the study environment in a cloud instance](#starting-the-study-environment-in-a-cloud-instance)

## Introduction

There are the following components in the judge0 ecosystem:
* **judge0:** is the backend that excecutes the code and exposes an API to which you cand send requests to run code.
* **compilers:** is the docker image with all the compilers, interpreters and sandbox that judge0 uses.
* **ide:** is the implementation of the online IDE.

## Setting up the TPM emulator

```bash
mkdir -p ./tpm2
ls -l /tmp/*
# Install dependencies
sudo apt update && \
  apt -y install automake autoconf \
  bash coreutils expect libtool sed \
  fuse fuse net-tools python3 python3-twisted \
  selinux-policy-dev tpm-tools gnutls-bin \
  libgnutls28-dev libtasn1-6-dev libtasn1-bin \
  pkg-config build-essential socat libseccomp-dev \
  libssl-dev python3-setuptools kmod
apt update && \
  apt -y install automake autoconf coreutils libfuse-dev && \
  libglib2.0-dev libgmp-dev expect libtasn1-dev socat && \
  python3-twisted gnutls-dev gnutls-bin libglib2.0-dev

# # Get and install libtpms
curl -fSsL "https://github.com/stefanberger/libtpms/archive/v0.7.4.tar.gz" -o /tmp/libtpmsv0.7.4.tar.gz && \
  mkdir ./tpm2/libtpms && \
  tar -xf /tmp/libtpmsv0.7.4.tar.gz -C ./tpm2/libtpms/ && \
  rm -rf /tmp/*

cd ./tpm2/libtpms/libtpms-0.7.4/
./autogen.sh --with-tpm2 --with-openssl --prefix=/usr && \
  make -j$(nproc) && \
  make -j$(nproc) check && \
  make install && \
  ldconfig && \
  make clean

# Get and install swtpm
curl -fSsL "https://github.com/stefanberger/swtpm/archive/v0.5.0.tar.gz" -o /tmp/swtpmv0.5.0.tar.gz && \
  mkdir ./tpm2/swtpm && \
  tar -xf /tmp/swtpmv0.5.0.tar.gz -C ./tpm2/swtpm/ && \
  rm -rf /tmp/*

cd ./tpm2/swtpm/swtpm-0.5.0/
./autogen.sh --with-openssl --prefix=/usr && \
  make -j$(nproc) && \
  make -j$(nproc) check && \
  make install && \
  ldconfig && \
  make clean
```

## Setting up judge0

Followed instructions from [here](https://github.com/judge0/judge0/blob/master/CHANGELOG.md#deployment-procedure).

### Install dependencies
Install Docker and Docker compose according to the installation instructions in their webpage

### Disable telemetry
Set `JUDGE0_TELEMETRY_ENABLE` to `false` in `judge0.conf`.

### Start the docker containers
```bash
docker-compose up -d db redis
docker-compose up -d
```

[comment]: # (todo: IP address here probably needs to be changed, when deployed in the real target device)
[comment]: # (I used my local IP address instead of localhost, which was 192.168.1.44. If the real code has this address, that's why)

judge0 is now available at [http://localhost](http://localhost).
This is the backend API that runs the code on the docker containers.

## Set up IDE
We are serving the directory where the IDE code is by using `npx serve`.

We changed the following line in `./ide/js/ide.js`:
```javascript
var defaultUrl = "http://localhost/" || localStorageGetItem("api-url") || "https://preview.api.judge0.com";
```

Then this works!


## Viewing submissions (source code and output).
The `judge0_db_1` container has a postgreSQL database that stores all information related to the submissions to judge0 (along with statistics and other info).
To view the submissions done, we can directly check the contents of the database:

```bash
docker exec -it judge0_db_1 bash
```

Then, inside the docker container, log in to the database `judge0` as user `judge0`:
```bash
psql -U judge0 judge0
```

Finally, list the contents of the submissions database:
```sql
select id, source_code, stdout
from submissions;
```

```
 id  |                         source_code                          |                            stdout                            
-----+--------------------------------------------------------------+--------------------------------------------------------------
   1 | cHJpbnQoImhlbGxvLCB3b3JsZCIp                                +| aGVsbG8sIHdvcmxkCg==                                        +
     |                                                              | 
  12 | d2hpY2ggcHl0aG9u                                            +| L3Vzci9iaW4vcHl0aG9uCg==                                    +
     |                                                              | 
   2 | cHJpbnQoImhlbGxvLCB3b3JsZCIpDQoNCmZvciBpIGluIHJhbmdlKDAsIDUp+| aGVsbG8sIHdvcmxkCjAKMQoyCjMKNAo=                            +
     | Og0KICAgIHByaW50KGkp                                        +| 
     |                                                              | 
   8 | aW1wb3J0IG9zDQpmcm9tIGRhdGV0aW1lIGltcG9ydCBkYXRlDQoNCnByaW50+| 
     | KGRhdGV0aW1lLm5vdykNCg0KZm9yIGRpcm5hbWUsIGRpcm5hbWVzLCBmaWxl+| 
     | bmFtZXMgaW4gb3Mud2FsaygnL2Rldi8nKToNCiAgICAjIHByaW50IHBhdGgg+| 
     | dG8gYWxsIHN1YmRpcmVjdG9yaWVzIGZpcnN0Lg0KICAgIGZvciBzdWJkaXJu+| 
     | YW1lIGluIGRpcm5hbWVzOg0KICAgICAgICBwcmludChvcy5wYXRoLmpvaW4o+| 
     | ZGlybmFtZSwgc3ViZGlybmFtZSkpDQoNCiAgICAjIHByaW50IHBhdGggdG8g+| 
     | YWxsIGZpbGVuYW1lcy4NCiAgICBmb3IgZmlsZW5hbWUgaW4gZmlsZW5hbWVz+| 
     | Og0KICAgICAgICBwcmludChvcy5wYXRoLmpvaW4oZGlybmFtZSwgZmlsZW5h+| 
     | bWUpKQ0KDQo=                                                +| 
     |                                                              | 
   3 | cHJpbnQoImhlbGxvLCB3b3JsZCIpDQoNCmZvciBpIGluIHJhbmdlKDAsIDUp+| aGVsbG8sIHdvcmxkCjAKMQoyCjMKNAp3b29ob28K                    +
     | Og0KICAgIHByaW50KGkpDQoNCnByaW50KCJ3b29ob28iKQ==            +| 
     |                                                              | 
   4 | cHJpbnQoImhlbGxvLCB3b3JsZCIpDQoNCmZvciBpIGluIHJhbmdlKDAsIDUp+| aGVsbG8sIHdvcmxkCjAKMQoyCjMKNAp3b29ob28K                    +
     | Og0KICAgIHByaW50KGkpDQoNCnByaW50KCJ3b29ob28iKQ==            +| 
```

The fields are base64 encoded, and by decoding we get the source code and the output.
For example, if we take the first entry:
```python
Python 2.7.18rc1 (default, Apr  7 2020, 12:05:55) 
[GCC 9.3.0] on linux2
Type "help", "copyright", "credits" or "license" for more information.
>>> from base64 import b64decode
>>> b64decode("cHJpbnQoImhlbGxvLCB3b3JsZCIp")
'print("hello, world")'
>>> 
```

There are other fields in the `submissions` table.
To view a list of the fields that we can query over, we can use the following database query in postgres:
```sql
select column_name
from information_schema.columns
where table_name = 'submissions';
```
```
                column_name                 
--------------------------------------------
 id
 source_code
 language_id
 stdin
 expected_output
 stdout
 status_id
 created_at
 finished_at
 time
 memory
 stderr
 token
 number_of_runs
 cpu_time_limit
 cpu_extra_time
 wall_time_limit
 memory_limit
 stack_limit
 max_processes_and_or_threads
 enable_per_process_and_thread_time_limit
 enable_per_process_and_thread_memory_limit
 max_file_size
 compile_output
 exit_code
 exit_signal
 message
 wall_time
 compiler_options
 command_line_arguments
 redirect_stderr_to_stdout
 callback_url
 additional_files
(33 rows)
```

# Starting the study environment in a cloud instance

We used the script under [./install_script.sh](./install_script.sh) to automatically initalize our instances for the study.
Details such as the SSL certificates need to be included in the script manually by checking on the commented out sections.