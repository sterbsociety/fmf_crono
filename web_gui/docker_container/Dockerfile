FROM node:14-alpine

WORKDIR /app

COPY node_modules node_modules 
COPY sources sources 
COPY .babelrc .babelrc 
COPY .eslintrc.json .eslintrc.json 
COPY index.html index.html 
COPY package-lock.json package-lock.json 
COPY package.json package.json 
COPY webpack.config.js webpack.config.js 
COPY yarn.lock yarn.lock 

CMD npm run start
