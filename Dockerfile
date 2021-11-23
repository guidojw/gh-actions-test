FROM node:17.1.0-alpine

ARG BUILD_HASH

COPY sourcemaps /usr/share/nginx/html/assets

RUN echo 'Dockerfile'
RUN echo $BUILD_HASH
