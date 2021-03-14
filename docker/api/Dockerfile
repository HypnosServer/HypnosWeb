FROM ruby:alpine

WORKDIR /app

RUN apk add alpine-sdk

COPY ./Gemfile ./Gemfile.lock ./

RUN bundler install

COPY ./src/api ./src/api

ENV APP_ENV="production"

ENTRYPOINT ["ruby", "src/api/main.rb"]
