require 'discordrb'
require 'dotenv'
require_relative 'api_server'

Dotenv.load

app = ApiServer.new

unless $bot
  $bot = Discordrb::Bot.new token: ENV["TOKEN"]

  $bot.ready do
    puts 'Connected to the Discord API'

    app.run!
  end

  $bot.run
end
