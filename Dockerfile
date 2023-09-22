FROM node:lts-alpine

WORKDIR /usr/src/app

COPY . .

CMD [ "node", "index_test.mjs" ]