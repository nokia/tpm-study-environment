#!/bin/bash
systemctl stop tpm-simulator.service
/bin/rm -rf /root/tpm2simulator/mytpm
/bin/mkdir /root/tpm2simulator/mytpm
systemctl start tpm-simulator.service
/root/tpm2simulator/extend_measurements.sh