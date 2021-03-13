require 'sinatra/base'
require_relative 'member_list'
require 'json'

class ApiServer
  def initialize
    @app = Sinatra.new do
      set :port, ENV["PORT"] || 4567
      before do
        content_type :json
      end

      get '/members' do
        MemberList.fetch.to_json
      end
    end

  end

  def run!
    @app.run!
  end
end
