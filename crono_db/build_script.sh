#!/bin/bash

echo "Starting building phase"

cd docker_container
docker build -t fmf_postgres:1.0.0 .

echo "Completed"
exit 0