const express = require('express');
const app = express();
app.listen(() => console.log('Made by Megz'));
app.use('/ping', (req, res) => {
    res.send(new Date());
});
const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require('node-cmd');
const ms = require('ms');
const fs = require('fs');
const ytdl = require('ytdl-core');
const canvas = require('canvas');
const convert = require('hh-mm-ss');
const fetchVideoInfo = require('youtube-info');
const simpleytapi = require('simple-youtube-api');
const util = require('util');1
const gif = require('gif-search');
const jimp = require('jimp');
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require('pretty-ms');
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');
const fetch = require('node-fetch');
client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setStatus('idle');
    client.user.setActivity(''); 
});
client.login(process.env.BOT_TOKEN);

 ///////////////////////////////////////////////////////////////////////
 client.on('message', msg=>{
    let SS = msg.content.split(" ").slice('').join(" ")

  var channel =  msg.channel.id === '925435160403537970'
  if (!channel) return false;
  if(msg.author.bot)return;
  if(msg.content.startsWith(''))
 {
        msg.delete()

  var embed = new Discord.MessageEmbed()
  .setAuthor(msg.author.username,msg.author.avatarURL({dynamic: true }))
  .setThumbnail(msg.author.avatarURL())
  .setColor('#000')
  .setDescription(`\n
  **${SS}**`)
   .setFooter(msg.guild.name,msg.guild.iconURL({dynamic: true }))
    .setTimestamp(msg.numberDate);

  client.channels.cache.get("925435160403537970").send(embed).then(function (msg) {

              msg.react("941428253929902081")
              msg.react("941428252097015818")
            }).catch(function() {

             });
}


});
/*
client.on('message', msg=>{
    let SS = msg.content.split(" ").slice('').join(" ")

  var channel =  msg.channel.id === '922128101364858910'
  if (!channel) return false;
  if(msg.author.bot)return;
  if(msg.content.startsWith(''))
 {
        msg.delete()

  var embed = new Discord.MessageEmbed()
  .setAuthor(msg.author.tag)
  .setThumbnail(msg.author.avatarURL())
  .setColor('Random')
  .setDescription(`**suggestion**  :\n
  ${SS}`);

 

  client.channels.cache.get("922128101364858910").send(embed).then(function (msg) {

              msg.react("✅")
              msg.react("❎")
            }).catch(function() {

             });
}


});
*/
 ///////////////////////////////////////////////////////////////////////
