FROM node:12-alpine

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN apk add --no-cache build-base gcc autoconf automake libtool zlib-dev libpng-dev nasm
RUN yarn install

COPY . ./

CMD ["yarn", "start"]
