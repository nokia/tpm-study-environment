# TPM 2 Simulator Files

The following files should be copied to `/root/tpm2simulator` in the server:

- [reset_tpm.sh](./reset_tpm.sh) is the script executed when we want to reset the state of the TPM completely.
- [restart_tpm.sh](./restart_tpm.sh) is the script executed when we want to restart/reboot the TPM.
- [extend_measurements.sh](./extend_measurements.sh) is the script executed to add measurements to PCRs 0-3.
- [tpm-manager.py](./tpm-manager.py) is a Flask server that will expose an API to reset and restart the TPM from the IDE.

The following file should be copied to `/etc/systemd/system/tpm-simulator.service` in the server:
- [tpm-simulator.service](./tpm-simulator.service) is the file that contains the systemd service that controls the TPM simulator.

Then, run the following commands:
```bash
systemctl daemon-reload
systemctl enable tpm-simulator.service
systemctl start tpm-simulator.service
systemctl status tpm-simulator.service
```

## `tpm-manager.py`

We run this app with the following command:

```bash
FLASK_APP=tpm-manager.py flask run --host 0.0.0.0 --port 4000
```

It exposes two endpoints:

1. `/restart_tpm`: which runs the command: `systemctl restart tpm-simulator.service`
2. `/reset_tpm`: which runs the script: `/root/tpm2simulator/reset_tpm.sh`

On success, they return:

```json
{
  "result": true
}
```

On failure, they return:

```json
{
  "result": false,
  "error": "<Error message here>"
}
```

### Dependencies
This application depends on python3, pip3, Flask and Flask CORS:
```bash
sudo apt-get install python3 python3-pip
pip3 install flask flask-cors
```
