
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }

const Database = require('./Database');
const Discord = require('discord.js');
const servermc = require('./Servermc');
const fs = require('fs')
const { serialize } = require('v8');
const { Server } = require('http');
static const ddb = new Database("host","user","password","ddb");

//On mettra tout dans un JSON
const token = process.env.TOKEN;
const client = new Discord.Client();
const prefix = "$"

client.commands = new Discord.Collection(); //ArrayList pour discordJS
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js')); // Récupère uniqument les fichiers JS pour commandes
for (const file of commandFiles) //On importe chaque commande 
{
  const command = require(`./commands/${file}`);
  client.commands.set(command.name,command)

}


client.on('ready', () => {
  console.log(`MineSealBot enabled`);
 

}); //Démarrage

client.on('message', message => 
{
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'host')
  {
    client.commands.get('host').execute(message,args);     
  }else if(command === 'join'){
    client.commands.get('join').execute(message,args);
  }else if(command === 'ainfo'){

  }
  });

client.on('guildMemberAdd', guildMember =>{
guildMember.author.send("Veuillez indiquer sous ce format $join [votre pseudominecraft] pour rejoindre le serveur")
})

client.login(token);

/*

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8124, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8124/');

*/