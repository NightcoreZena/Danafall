
const discord = require("discord.js");
const botConfig = require("../botConfig.json");
var color = (botConfig.color)


module.exports.run = async (bot, message, args) => {

        var embedstandaard = new discord.MessageEmbed()
            .setTitle('Sing along')
            .setDescription(`**Into the unknown**
            Ah ah oh oh oh
            Ah ah oh oh oh oh oh oh
            I can hear you but I won't
            Some look for trouble while others don't
            There's a thousand reasons I should go about my day
            And ignore your whispers which I wish would go away, oh oh oh
            Ah ah oh oh
            Oh oh
            Ah ah oh oh
            You're not a voice
            You're just a ringing in my ear
            And if I heard you, which I don't
            I'm spoken for I fear
            Everyone I've ever loved is here within these walls
            I'm sorry, secret siren, but I'm blocking out your calls
            I've had my adventure, I don't need something new
            I'm afraid of what I'm risking if I follow you
            Into the unknown
            Into the unknown
            Into the unknown
            Ah ah oh oh
            Ah ah oh oh oh oh
            What do you want? 'Cause you've been keeping me awake
            Are you here to distract me so I make a big mistake?
            Or are you someone out there who's a little bit like me?
            Who knows deep down I'm not where I'm meant to be?
            Every day's a little harder as I feel my power grow
            Don't you know there's part of me that longs to go...

            Into the unknown
            Into the unknown
            Into the unknown
            Ah ah oh oh
            Ah ah oh oh
            Oh oh oh
            Are you out there?
            Do you know me?
            Can you feel me?
            Can you show me?
            Ah ah oh oh
            Ah ah oh oh
            Ah ah oh oh
            Ah ah oh oh
            Oh oh oh oh
            Oh oh oh oh
            Oh oh oh oh
            Oh oh oh oh
            Oh oh oh oh
            Oh oh oh oh
            Where are you going?
            Don't leave me alone
            How do I follow you
            Into the unknown?`)
            .setColor(color)
            .setFooter('Into the unknown - lyrics')
            .setTimestamp()
            .setThumbnail(message.author.avatarURL())
        message.channel.send(embedstandaard)
    }
