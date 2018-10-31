const Discord = require('discord.js')
const client = new Discord.Client();
client.on('ready', function(){
 console.log(`Logged in as ${client.user.tag}!`);
   
    client.user.setPresence({
 game: { 
    type: 1,
     url: 'https://www.twitch.tv/skwadraa',
    name: 'اعتزال برمجه الى الابد .',
    application_id: '489557365301968906',
     assets: {
         large_image:   `505871779709976617`,
  
    }
  }
    });
  
});
client.login(process.env.BOT_TOKEN);
