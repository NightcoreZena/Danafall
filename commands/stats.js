const discord = require("discord.js");
const botConfig = require("../botConfig.json");
const ms = require('ms')
var color = (botConfig.color)

module.exports.run = async (bot, message, args) => {

    var embed = new discord.MessageEmbed()
    .setTitle(`${bot.user.username} stats`)
    .setColor(color)
    .setThumbnail(bot.user.displayAvatarURL())
    .addField('❯ Uptime', ms(bot.uptime, { long: true}), true)
    .addField('❯ Memory Usage', 'Soon', true)
    .addField('❯ General Stats', `• Guilds: ${bot.guilds.cache.size}\n• Members: ${message.guild.memberCount} `, true)
    .addField('❯ Prefix', botConfig.prefix, true)
    .addField('❯ Bot Avatar', `[Seen Here](${bot.user.displayAvatarURL()})`, true)
    .addField('❯ Libary', '[https://discord.js.org/](https://discord.js.org/)', true)


    message.channel.send(embed)
    


}