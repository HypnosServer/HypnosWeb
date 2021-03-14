## Hypnos website
Hypnos is a technical server focusing on innovative and more efficient ways to complete automated task in minecraft.

Built using React and a minimal backend in Ruby with Sinatra.

### Contribute
You will need Node and Yarn for the frontend, as well as Ruby and Bundler for the backend.

First clone the repository and install the dependencies:
```shell
$ git clone https://github.com/HypnosServer/HypnosWeb.git hypnos-web
$ cd hypnos-web

$ yarn install
$ bundle install
```

Build the frontend:
```shell
$ ruby src/api/main.rb
$ yarn dev
```
