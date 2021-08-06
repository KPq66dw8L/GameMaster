const MinecraftAPI = require('minecraft-api');


module.exports = {
    
    name: 'join',
    description: 'Commande qui permet de créer des parties',
    execute(message,args){

    const fetch = require('node-fetch')
    const fichier = require('../info.json');
    const sjson = JSON.stringify(fichier);
    const obj = JSON.parse(sjson)
    
    if(args.length === 0 || (args.length === 1 && args[0] === "help")){
        //help
        
            
    }else if(args.length == 1 && !(message.member.roles.cache.get(obj.MEMBERID))){
        {
            /*return fetch(`https://api.mojang.com/users/profiles/minecraft/`+args[0])
                .then(data => data.json(), message.channel.send("PAS BON MERDE"))
                .then(player => player.id)
                .then(lol => message.channel.send(lol));
            */
                fetch('https://api.mojang.com/users/profiles/minecraft/' + args[0]).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Something went wrong');
            }
        })
        .then(player => player.id)
        .then(lol => message.channel.send(lol))
        .catch((error) => {
        message.member.send("Mauvais pseudo")
});
}
}
}
}

