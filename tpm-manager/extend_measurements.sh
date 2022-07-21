#!/bin/bash
docker exec -it judge0_workers_1 tpm2_pcrevent 0 /api/docker-entrypoint.sh
docker exec -it judge0_workers_1 tpm2_pcrevent 1 /api/Gemfile
docker exec -it judge0_workers_1 tpm2_pcrevent 2 /api/Rakefile
docker exec -it judge0_workers_1 tpm2_pcrevent 3 /judge0.conf