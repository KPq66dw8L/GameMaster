import mysql from 'mysql'
require("./commands");

class database {
    
    constructor(host , user , password,connexion)
    {
        this.host = host;
        this.user = user;
        this.password = password;
        this.connexion = connexion
    }

connexion(host1, user1 ,password1) // Permet de créer une connexion distante entre bot et DDB
{
   let c = mysql.createConnection({
        
        host: host1,
        user: user1,
        password : password1
    
    
    });
    c.connect(function(err){
        if (err) throw err;
        console.log("DDB connecté")
    });

}

verif_database(host1,user,password1,) //Permet de vérifier si la database est créée sinon de la créer
{




}

}
