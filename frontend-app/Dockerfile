FROM node:9.5 as builder

WORKDIR   /frontend
COPY    . /frontend

RUN npm install
RUN npm run build
