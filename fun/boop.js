
const discord = require("discord.js");
const botConfig = require("../botConfig.json");
var color = (botConfig.color)

module.exports.run = async (bot, message, args) => {

    let boop = args.slice(0).join(" ");
    if(!boop) return message.channel.send('You didn\'t specify a user');
    var boopmember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (boopmember.id === message.member.id) return message.channel.send("Haha! Why you trynna boop yourself?");
    await message.channel.send(`✅ | Succesfully Booped ${boopmember}!`)


}