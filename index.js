const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "*"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**
      حياك الله ي بعد راسي
       خش بتنورنا فعاليات وكل شيء حلو موجود !
        ي بعد عيني الرابط تحت
        

                                 [ https://discord.gg/Un29Wvs  ]
@everyone  | @here **`)
}).catch(console.error)
})

client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**
      حياك الله ي بعد راسي
       خش بتنورنا فعاليات وكل شيء حلو موجود !
        ي بعد عيني الرابط تحت
     

                                 [ https://discord.gg/Un29Wvs ]
@everyone  | @here **`)
}).catch(console.error)
})

//bc

//bc online




client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : Abdou_DZ`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : abdou-DZ ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`.. ,`,"http://twitch.tv/abdoufersaoui_dz")
client.user.setStatus("Dz")
});


client.login(process.env.TOKEN);
