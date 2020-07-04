const discord = require("discord.js");
const botConfig = require("../../botConfig.json");
var color = (botConfig.color)
var prefix = botConfig.prefix

module.exports.run = async (bot, message, args) => {
    var embedstandaard = new discord.MessageEmbed()
        .setAuthor(bot.user.username)
        .setColor(color)
        .setTitle('Commands')
        .setDescription(`Remember all commands start with an ${prefix} sign and are lowercase.\n\n**Moderation**\n\`\`Nothing yet\`\`\n\n**Economy**\n\`\`Nothing yet\`\`\n\n**Frozen**\n\`\`${prefix}anna, ${prefix}elsa, ${prefix}elsaanna, ${prefix}frozen, ${prefix}letitgo, ${prefix}intotheunknown\`\``)
    message.channel.send(embedstandaard)
}
