FROM node:14-alpine

WORKDIR /app

COPY node_modules node_modules
COPY build build

RUN apk update
RUN apk add build-base python3 bash git

CMD node build
