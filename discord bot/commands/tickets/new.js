const discord = require("discord.js")
const botConfig = require("../../botconfig.json");
var color = (botConfig.color)

module.exports.run = async (bot, message, args) => {

    
    // Alle embeds
// ticket is aan het maken
    var embed = new discord.MessageEmbed()
        .setTitle(`Hello ${message.author.username}`)
        .setFooter("Your ticket is creating...")
        .setColor(color);
    // In ticket categorie
    var embedParent = new discord.MessageEmbed()
        .setTitle(`Hello ${message.author.username}`)
        .addField('Ticket:', message.author.username)


    const ticketCategorieID = "727095524716576859";
    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator

    var ticketbestaat = false;

    message.guild.channels.cache.forEach(channel => {

        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {
            ticketbestaat = true;

            message.reply("You have already an ticket.");

            return;
        }

    });

    if (ticketbestaat) return;
    message.channel.send(embed)

    message.guild.channels.create(userName.toLowerCase() + "-" + userDiscriminator, { type: 'text' }).then(
        (createdChannel) => {
            createdChannel.setParent(ticketCategorieID).then(
                (settedParent) => {

                    settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'), {
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false
                    });
                    settedParent.updateOverwrite(message.author.id, {
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        VIEW_CHANNEL: true,
                        ADD_REACTIONS: true
                    });
                    settedParent.send(embedParent);
                }

            )

        }
    )


}