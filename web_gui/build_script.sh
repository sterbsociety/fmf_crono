#!/bin/bash

echo "Starting building phase"

cd main
rm -rf node_modules
npm install 
npm run build

cp -r node_modules ../docker_container/
cp -r sources ../docker_container/
cp -r .babelrc ../docker_container/
cp -r .eslintrc.json ../docker_container/
cp -r index.html ../docker_container/
cp -r package-lock.json ../docker_container/
cp -r package.json ../docker_container/
cp -r webpack.config.js ../docker_container/
cp -r yarn.lock ../docker_container/

cd ../docker_container
docker build -t webgui:1.0.0 .

rm -rf node_modules
rm -rf sources
rm -rf .babelrc
rm -rf .eslintrc.json
rm -rf index.html
rm -rf package-lock.json
rm -rf package.json
rm -rf webpack.config.js
rm -rf yarn.lock 

echo "Completed"
exit 0
