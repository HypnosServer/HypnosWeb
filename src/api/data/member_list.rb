require 'discordrb'

class MemberList
  def self.fetch
    # @type [Discordrb::Server]
    server = $bot.servers[$config['guild_id'].to_i]

    server.members
      .filter{ |m| m.role? $config['member_role_id'].to_i }
      .map{ |m| format m }
  end

  def self.format(member)
    {
      :avatar   => member.avatar_url(:png),
      :username => member.username
    }
  end
end
