const discord = require('discord.js');

exports.run = async (bot, message, args) => {
    var banUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

    var emoji = ['✅', '❌']

    const embed = new discord.MessageEmbed()

        .setDescription(`You sure you want to ban ${banUser}?`)
    message.delete();
    message.channel.send(embed).then(async msg => {

        await msg.react('✅');
        await msg.react('❌');



        if (emoji === "✅") {
            message.guild.member(banUser).ban
            var banembed = new discord.MessageEmbed()
                .setDescription(`:white_check_marK: ${banUser} has been **banned** by ID \`\`${message.author.id}\`\``)
                .setColor("GREEN")
            message.channel.send(banembed)
        

         } else if (emoji === '❌') {
            var cancelembed = new discord.MessageEmbed()
                .setDescription(`❌ Ban for ${banUser} has been canceled by ID \`\`${message.author.id}\`\``)
                .setColor("RED")
            message.channel.send(cancelembed)

            msg.delete();
        }

    }

    )
}


