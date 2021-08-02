if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }

// const Discord = require("discord.js");
// const fetch = require("node-fetch");
// const Database = require("@replit/database");
// const express = require("express");
// const keepAlive = require("./server");

// const db = new Database();
// const client = new Discord.Client();

// const my_secret = process.env.TOKEN;

// const starterEncouragements = [
//   "Cheer up!",
//   "Hang in there.",
//   "You are a great person / bot!"
// ]

// const sadWords = [
//   "sad",
//   "depressed",
//   "triste",
//   "suicide"
// ]

// db.get("encouragements").then(encouragements => {
//   if(!encouragements || encouragements.length < 1){
//     db.set("encouragements", starterEncouragements)
//   }
// })

// function updateEncuragements(encouragingMessage){
//   db.get("encouragements").then(encouragements =>{
//     encouragements.push([encouragingMessage])
//     db.set("encouragements", encouragements)
//   })
// }

// function deleteEncouragement(index){
//   db.get("encouragements").then(encouragements =>{
//     if(encouragements.length > index){
//       encouragements.splice(index, 1)
//       db.set("encouragements", encouragements)
//     }
//   })
// }

// function getQuote() {
//   return fetch("https://zenquotes.io/api/random").then(res => {
//     return res.json()
//   })
//   .then(data => {
//     return data[0]["q"] + " -" + data[0]["a"]
//   })
// }

// client.on("ready", () => {
//   console.log(`Logged in as ${client.user.tag}!`)
// })

// client.on("message", msg => {
//   //so that the bot does not respond to itself
//   if(msg.author.bot) return
  
//   if(msg.content === "$inspire") {
//     getQuote().then(quote => msg.channel.send(quote))
//   }

//   if (sadWords.some(word => msg.content.includes(word))) {
//     db.get("encouragements").then(encouragements =>{
//       const encouragement = encouragements[Math.floor(Math.random() * encouragements.length)]
//       msg.reply(encouragement)
//     })
//   }

//   if(msg.content.startsWith("$new")){
//     encouragingMessage = msg.content.split("$new ")[1]
//     updateEncuragements(encouragingMessage)
//     msg.channel.send("New encouraging message added.")
//   }
//   if(msg.content.startsWith("$del")){
//     index = parseInt(msg.content.split("$del ")[1])
//     deleteEncouragement(index)
//     msg.channel.send("Encouraging message deleted.")
//   }

//   if(msg.content === "ping") {
//     msg.reply("pong");
//   }
// });

// keepAlive();
// client.login(my_secret);