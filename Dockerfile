FROM node:17.1.0

WORKDIR /opt/app
COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN yarn build

CMD yarn start
