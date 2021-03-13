require 'sinatra/base'
require 'sinatra/cross_origin'
require_relative 'data/member_list'
require 'json'
require_relative 'data/status_list'

class ApiServer
  def initialize
    @app = Sinatra.new do
      configure do
        enable :cross_origin
        set :port, $config['port'] || 4567
      end

      before do
        response.headers['Access-Control-Allow-Origin'] = '*'
        content_type :json
      end

      get '/members' do
        MemberList.fetch.to_json
      end

      get '/status' do
        StatusList.get.to_json
      end
    end
  end

  def run!
    @app.run!
  end
end
