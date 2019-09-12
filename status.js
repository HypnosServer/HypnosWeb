<script src="https://mcapi.us/scripts/minecraft.js"></script>
    <div class="server-status">
      ServerA Status <span class="server-online"></span>!
    </div>
    <script>
      MinecraftAPI.getServerStatus('lastcraft.us.to', {
        port: 25565 // optional, only if you need a custom port
      }, function (err, status) {
        if (err) {
          return document.querySelector('.server-status').innerHTML = 'Server is Currently Down';
        }

        // you can change these to your own message!
        document.querySelector('.server-online').innerHTML = status.online ? 'CurrentlyOnline' : 'CurrentlyDown';
      });
    </script>
