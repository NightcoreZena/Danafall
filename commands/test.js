const discord = require("discord.js");
const botConfig = require("../botConfig.json");
var color = (botConfig.color)

module.exports.run = async (bot, message, args) => {




var userinf = new discord.MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL)
.setThumbnail(message.author.avatarURL)
.setDescription("Guild: " + message.guild)
.setColor(0x333333)
.addField("Full Username: ", `${message.author.username}#${message.author.discriminator}`, true)
.addField("ID:", message.author.id, true)
.addField('Current Nickname: ', message.author.toString(), true)
.addField("Current Status: ", status[message.author.presence.status], true)
.addField("Currently Playing: ", message.author.presence.game || "Nothing", true)
.addField("Joined On: ", message.author.joinedAt, true)
.addField("Account Type: ", bot[message.author.bot], true)
.addField("Created On: ", newDate, true)
.setFooter("Created by Brickman#4669", client.user.avatarURL)

message.channel.send(userinf)
}