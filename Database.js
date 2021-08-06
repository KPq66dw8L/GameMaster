
// const { throws } = require('assert');
const mysql = require('mysql');

// 'use strict';

module.exports = class Database {
    
    constructor(host , user , password,ddb)
    {
        this.host = host;
        this.user = user;
        this.password = password;
        this.ddb = ddb;
        
    }

connexion() // Permet de créer une connexion distante entre bot et DDB
{
   var c = mysql.createConnection({
        host: this.host,
        user: this.user,
        password : this.password
    });
    c.connect(function(err){
        if (err) throw err;
        console.log("DDB connecté")
    });
}

// verif_database() //Permet de vérifier si la database est créée sinon de la créer{}

select(champs,table){
    var c = mysql.createConnection({
        host: this.host,
        user: this.user,
        password : this.password
    });
  
  con.connect(function(err) {
    if (err) throw err;
    
    con.query("SELECT * FROM "+ table, function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });

}



insert(pseudo,IDDISCORD,UUID,GRADEID){
var con = mysql.createConnection({
  host: this.host,
  user: this.user,
  password: this.password,
  database: this.ddb
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO "+ddb+" ("+pseudo+", "+ IDDISCORD+") VALUES "+"('"+UUID+"', '"+GRADEID+"')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("ajouté");
  });
}
);



}}
