module.exports = {
  
    name: 'host',
    description: 'Commande qui permet de créer des parties',
    execute(message,args){

      // const sa = JSON.stringify('./info.json')
      const fichier = require('../info.json');
      const sjson = JSON.stringify(fichier);
      const obj = JSON.parse(sjson)
    

        if(message.member.roles.cache.has(obj.ADMINID) || message.member.roles.cache.has(obj.HOSTID)){
          if((args.length === 0)  || (args.length == 1) && (args[0]==='help')){
      
          //Fonction embed avec toutes les commandes
        }else if(args.length === 1){
          let arg = args[0];

        if(arg == 'start'){
          
          message.member.send("Veuillez paramétrer la partie à partir du lien ci-dessus")
          const channelAnnonce = message.client.channels.cache.get(obj.ANNONCESID)
          channelAnnonce.send("@everyone " +"<@"+message.author.id+">"+" a démarré un host").then(function (message) 
          
 /*       // at the top of your file
{const { MessageEmbed } = require('discord.js');

// inside a command, event listener, etc.
const exampleEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor('Some name', 'https://i.imgur.com/AfFp7pu.png', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/AfFp7pu.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/AfFp7pu.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/AfFp7pu.png');

channelAnnonce.send({ embeds: [exampleEmbed] })  
*/          

         {
          message.react("👍")
        }).catch(function() {
          console.log("Erreur de réaction.")
        });

          




        }
         }

      }else{

        message.member.send("Vous n'avez pas la permission.")
      }

        //help

      }

    


    
    






  }

