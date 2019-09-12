<script src="https://mcapi.us/scripts/minecraft.js"></script>
    <div class="server-status">
      My awesome server is currently <span class="server-online"></span>!
    </div>
    <script>
      MinecraftAPI.getServerStatus('s.nerd.nu', {
        port: 25565 // optional, only if you need a custom port
      }, function (err, status) {
        if (err) {
          return document.querySelector('.server-status').innerHTML = 'Error loading status';
        }

        // you can change these to your own message!
        document.querySelector('.server-online').innerHTML = status.online ? 'up' : 'down';
      });
    </script>
