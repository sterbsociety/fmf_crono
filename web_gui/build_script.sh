#!/bin/bash

echo "Starting building phase"

cd main
rm -rf node_modules
npm install 
npm run build

cp index.html ../docker_container/
cp -r codebase ../docker_container/

cd ../docker_container
docker build -t web_gui:1.0.0 .

echo "Completed"
exit 0