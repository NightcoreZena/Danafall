const discord = require("discord.js");
const botConfig = require("./botConfig.json")
const ms = require("parse-ms")
const PREFIX = botConfig.prefix
const color = botConfig.color

const fs = require("fs");

const active = new Map();




const bot = new discord.Client();
bot.commands = new discord.Collection();

bot.on("ready", async () => {
  console.log(`${bot.user.username} is now online!`)
  let statuses = [` | ${PREFIX}help.`, ` | In ${bot.guilds.cache.size} guilds.`, ` | ${bot.user.username}!`]

  setInterval(function () {
      let status = statuses[Math.floor(Math.random() * statuses.length)]

      bot.user.setActivity(status, { type: "PLAYING" })
  }, 2000)
})



var swearWord = ["kkr", "kanker", "kqnker", "kqnk3r"]

bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return message.channel.send(":x: | Sorry, my commands do not work in DM.");

  
  

  var msg = message.content.toLowerCase();

  for (let i = 0; i < swearWord.length; i++) {

    if (msg.includes(swearWord[i])) {

      message.delete();

      var embed = new discord.MessageEmbed()
.setColor(color)
.setAuthor(`${message.author.tag} has been warned`, message.author.displayAvatarURL())
.setDescription(`**Reason** bad word usage`)
      return message.channel.send(embed)
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


});

bot.login(process.env.token);