require 'yaml'

$config = YAML::load_file 'config/api-config.yml'

require 'discordrb'

$bot = Discordrb::Bot.new token: $config['token']

$bot.ready do
  puts 'Connected to the Discord API'

  require_relative 'api_server'

  app = ApiServer.new
  app.run!
end

$bot.run
