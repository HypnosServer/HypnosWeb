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

#### Frontend
To run the frontend in a development environment, run:
```shell
$ yarn dev
```
and connect to `http://localhost:1234/`.

The React app is to be found under `src/web`; this is what will be served and watched
with the previous command.

Files in the `static` folder won't be bundled in the production environment but
will still be served.

#### Backend
❗️You don't need this if you are only going to contribute to the frontend.

To run the backend in an development environment, create a `config` folder at
the root of the project and inside it, create an `api-config.yml` file with the following
fields:
```yaml
token:          # Your bot token
guild_id:       # The guild id to fetch members from (no quotes)
member_role_id: # The role id of the member role (no quotes)

servers:        # This is an array: add as many servers as you want.
  - name: SMP
    host: localhost
    port: 25565
```

Once done, run:
```shell
$ ruby src/api/main.rb
```

### Usage
You will need to create a folder at `/etc/hypnosweb` on your host machine and place inside it a
`api-config.yml` file with the fields shown above.

To run the web app in a production environment, build and deploy the docker image
with:
```shell
$ yarn deploy
```

You can specify a host via the `DOCKER_HOST` environment variable:
```shell
$ DOCKER_HOST="ssh://jdoe@address.com" yarn deploy
```
