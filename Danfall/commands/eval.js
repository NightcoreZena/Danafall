const Discord = require("discord.js");
const botConfig = require("../botConfig.json");
var prefix = botConfig.prefix
var color = (botConfig.color)

module.exports.run = async (bot, message) => {
    const args = message.content.substring(prefix.length).split(" ")
    const command = args.slice(1).join(" ")
    
    if(!message.author.id === '718827093395243059')
      return message.channel.send('only owner can use this command')
    
    if(!command) return message.channel.send('you need something to eval')

    try {
      const evaled = eval(command)
      
      var embed = new Discord.MessageEmbed()
      .setColor(color)
      .setTitle('Evaluated')
      .addField('to eval', `\`\`\`${command}\`\`\``)
      .addField('evaled', `\`\`\`js\n${inspect(evaled, { depth: 0})}\`\`\``)
      .addField('type of', `\`\`\`${typeof(evaled)}\`\`\``)
      message.channel.send(embed)
      
    } catch (error) {
      var embed = new Discord.MessageEmbed()
      .setColor(color)
      .setTitle('Error')
      .addField('Error', `${error}`)
      message.channel.send(embed)
    }
}