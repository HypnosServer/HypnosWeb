require 'discordrb'

module MemberList
  def MemberList.fetch
    # @type [Discordrb::Server]
    server = $bot.servers[ENV["GUILD_ID"].to_i]

    server.members
      .filter{ |m| m.role? ENV["MEMBER_ROLE_ID"].to_i }
      .map{ |m| format m }
  end

  def MemberList.format(member)
    {
      :avatar   => member.avatar_url(:png),
      :username => member.username
    }
  end
end
