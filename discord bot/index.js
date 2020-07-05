const discord = require("discord.js");
const botConfig = require("./botConfig.json")
const ms = require("parse-ms")
const PREFIX = botConfig.prefix
const color = botConfig.color
const token = require("./token.json")

const fs = require("fs");

const active = new Map();




const bot = new discord.Client();
bot.commands = new discord.Collection();

bot.on("ready", async () => {
  console.log(`print ("Hello World")`)
  let statuses = [` | ${PREFIX}help.`, ` | In ${bot.guilds.cache.size} guilds.`, ` | ${bot.user.username}!`]

  setInterval(function () {
    let status = statuses[Math.floor(Math.random() * statuses.length)]

    bot.user.setActivity(status, { type: "Watching" })
  }, 2000)
})



var swearWord = ["kkr", "kanker", "kqnker", "kqnk3r"]
var link = ["https://", "www."]
bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return message.channel.send(":x: | Sorry, my commands do not work in DM.");
  if(message.content === 'gm') {
    var gmembed = new discord.MessageEmbed()
    .setDescription(`:sunrise: Good morning ${message.author}`)
    .setColor(color)
    message.channel.send(gmembed)
  }
  if(message.content === 'Gm') {
    var gmembed = new discord.MessageEmbed()
    .setDescription(`:sunrise: Good morning ${message.author}`)
    .setColor(color)
    message.channel.send(gmembed)
  }
  if(message.content === 'gM') {
    var gmembed = new discord.MessageEmbed()
    .setDescription(`:sunrise: Good morning ${message.author}`)
    .setColor(color)
    message.channel.send(gmembed)
  }
  if(message.content === 'GM') {
    var gmembed = new discord.MessageEmbed()
    .setDescription(`:sunrise: Good morning ${message.author}`)
    .setColor(color)
    message.channel.send(gmembed)
  }




  var msg = message.content.toLowerCase();

  for (let i = 0; i < swearWord.length; i++) {

    if (msg.includes(swearWord[i])) {

      message.delete();

      var embedswear = new discord.MessageEmbed()
        .setColor(color)
        .setAuthor(`${message.author.tag} has been warned`, message.author.displayAvatarURL())
        .setDescription(`**Reason:** Bad word usage`)
      return message.channel.send(embedswear)
    }

  for (let l = 0; l < link.length; l++) {
    if (msg.includes(link[l])) {
      message.delete();

      var embedlink = new discord.MessageEmbed()
      .setColor(color)
      .setAuthor(`${message.author.tag} has been warned`, message.author.displayAvatarURL())
      .setDescription(`**Reason:** Posted a link`)
      return message.channel.send(embedlink)
    }
  }

  }


  let prefix = botConfig.prefix;
  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(bot, message, args);
    console.log(`user ${message.author.tag} executed ${command}`)

  } catch (err) {
    console.error(err)
  }

  try {
    let sinsFile = require(`./commands/7ds/${command}.js`);
    sinsFile.run(bot, message, args);
    console.log(`user ${message.author.tag} executed ${command}`)

  } catch (err) {
    console.error(err)
  }

  try {
    let cherryblossomFile = require(`./commands/cherryblossom/${command}.js`)
    cherryblossomFile.run(bot, message, args);
    console.log(`user ${message.author.tag} executed ${command}`)

  } catch (err) {
    console.error(err)
  }

  try {
    let economyFile = require(`./commands/economy/${command}.js`)
    economyFile.run(bot, message, args);
    console.log(`user ${message.author.tag} executed ${command}`)

  } catch (err) {
    console.error(err)
  }

  try {
    let frozenFile = require(`./commands/frozen/${command}.js`)
    frozenFile.run(bot, message, args);
    console.log(`user ${message.author.tag} executed ${command}`)

  } catch (err) {
    console.error(err)
  }

  try {
    let funFile = require(`./commands/fun/${command}.js`)
    funFile.run(bot, message, args);
    console.log(`user ${message.author.tag} executed ${command}`)
    
  } catch (err) {
    console.error(err)
  }

  try {
    let memberFile = require(`./commands/member/${command}.js`)
    memberFile.run(bot, message, args);
    console.log(`user ${message.author.tag} executed ${command}`)

  } catch (err) {
    console.error(err)
  }

  try {
    let moderationFile = require(`./commands/moderation/${command}.js`)
    moderationFile.run(bot, message, args);
    console.log(`user ${message.author.tag} executed ${command}`)
    
  } catch (err) {
    console.error(err)
  }

  try {
    let musicFile = require(`./commands/music/${command}.js`)
    musicFile.run(bot, message, args);
    console.log(`user ${message.author.tag} executed ${command}`)
    
  } catch (err) {
    console.error(err)
  }
  try {
    let ticketFile = require(`./commands/tickets/${command}.js`)
    ticketFile.run(bot, message, args)
    console.log(`user ${message.author.tag} executed ${command}`)

  } catch (err) {
    console.error(err)
  }
  

});


bot.login(token.token)