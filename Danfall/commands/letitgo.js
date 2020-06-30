const discord = require("discord.js");
const botConfig = require("../botConfig.json");
var color = (botConfig.color)


module.exports.run = async (bot, message, args) => {

        var embedstandaard = new discord.MessageEmbed()
            .setTitle('let it go')
            .addField('Part 1', `The snow glows white on the mountain tonight
            Not a footprint to be seen
            A kingdom of isolation
            And it looks like I'm the queen
            The wind is howling like this swirling storm inside
            Couldn't keep it in, heaven knows I've tried
            Don't let them in, don't let them see
            Be the good girl you always have to be
            Conceal, don't feel, don't let them know
            Well, now they know
            Let it go, let it go
            Can't hold it back anymore
            Let it go, let it go
            Turn away and slam the door
            I don't care what they're going to say
            Let the storm rage on
            The cold never bothered me anyway
            Let it go, let it go
            Can't hold it back anymore
            Let it go, let it go
            Turn away and slam the door
            Let it go (go, go, go go, go go, go go, go, go, go go)
            Let it go
            Let it go
            Let it go`)
            .addField(`Part 2`, `It's funny how some distance makes everything seem small
            And the fears that once controlled me can't get to me at all
            It's time to see what I can do
            To test the limits and break through
            No right, no wrong, no rules for me
            I'm free
            Let it go, let it go
            I am one with the wind and sky
            Let it go, let it go
            You'll never see me cry
            Here I stand and here I stay
            Let the storm rage on
            `)
            .addField('Part 3', `My power flurries through the air into the ground
            My soul is spiraling in frozen fractals all around
            And one thought crystallizes like an icy blast
            I'm never going back, the past is in the past
            Let it go
            The cold never bothered me anyway
            Let it go, let it go
            And I'll rise like the break of dawn
            Let it go, let it go
            That perfect girl is gone
            Here I stand in the light of day
            Let the storm rage on`)
            
            .setColor(color)
            .setFooter('Into the unknown - lyrics')
            .setTimestamp()
            .setThumbnail(message.author.avatarURL())
        message.channel.send(embedstandaard)
    }
