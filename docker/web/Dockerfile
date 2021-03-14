# 1. Node image for building frontend assets;

FROM node:12-alpine AS builder

WORKDIR /build

COPY ./package.json ./yarn.lock ./

RUN yarn install

COPY ./tsconfig.json ./

COPY ./src/web ./src/web

RUN npx parcel --version

RUN yarn build

# 2. NGINX stage to serve frontend assets.

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY ./docker/web/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /build/dist .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
