if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }

const Discord = require('discord.js');
const { token } = require('./config.json')
const client = new Discord.Client();
const prefix = "$"

client.on('ready', () => {console.log(`Started`);});

client.on('message', message => {
  if(!message.channel.id === null){
  if(!message.content.startsWith(prefix) || message.author.bot) return; 
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  
  if(command === 'host'){
    message.channel.send("NIGGER")
    


  }
}else{


}

  
    
  
});

client.on('guildMemberAdd', guildMember =>{
  guildMember.author.send("Veuillez indiquer sous ce format $join [votre pseudominecraft] pour rejoindre le serveur")
})




client.login(token);

