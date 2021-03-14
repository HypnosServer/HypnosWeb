require 'minestat'
require 'json'

class StatusList
  @@cache = []

  # Updates the statuses every 2 minutes,
  # instead of fetching them for every request which
  # is obviously slow and inefficient.
  Thread.new do
    loop do
      @@cache = StatusList.fetch
      sleep 120
    end
  end

  def self.get
    @@cache
  end

  def self.fetch
    $config["servers"].map do |s|
      server = MineStat.new s["host"], s["port"], 1

      { :online => server.online, :name => s["name"] }
    end
  end
end
