FROM node:17.1.0-alpine

ARG BUILD_HASH

RUN echo 'Dockerfile'
RUN echo $BUILD_HASH