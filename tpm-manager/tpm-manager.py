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
        restart_tpm_cmd = shlex.split("/root/tpm2simulator/restart_tpm.sh")
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
        reset_tpm_cmd = shlex.split("/root/tpm2simulator/reset_tpm.sh")
        read_key_output = subprocess.check_output(
            reset_tpm_cmd, stderr=subprocess.STDOUT)
        response = jsonify({'result': True})
        response.status_code = 200
    except Exception as e:
        response = jsonify({"result": False, "error": str(e)})
        response.status_code = 500
    return response
