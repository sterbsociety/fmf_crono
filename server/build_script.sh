#!/bin/bash

echo "Starting building phase"
yarn precommit

cp -r node_modules docker_container/
cp -r build docker_container/

cd docker_container
docker build -t fmf_server:1.0.0 .

rm -rf node_modules build
echo "Completed"
exit 0
