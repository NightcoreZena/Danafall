const { MessageEmbed } = require('discord.js');
const { prefix } = require('../botconfig.json');

exports.run = async (client, message, args) => {

    await message.delete().catch(O_o=>{});

    const black = message.guild.roles.cache.get('721626459323760642'); //✨Black
    const grey = message.guild.roles.cache.get('703256076778209321'); //✨Grey
    const white = message.guild.roles.cache.get('709304929894006825'); //✨White
    const pink = message.guild.roles.cache.get('703256077386645505'); //✨Pink
    const purple = message.guild.roles.cache.get('709304930477015131'); //✨Purple
    const blue = message.guild.roles.cache.get('703254449669275718'); //✨Blue
    const cyan = message.guild.roles.cache.get('709304931395436574'); //✨Cyan
    const green = message.guild.roles.cache.get('703254448259989666'); //✨Green
    const red = message.guild.roles.cache.get('703254448977215569'); //✨Red
    const orange = message.guild.roles.cache.get('709304932003741716'); //✨Orange
    const yellow = message.guild.roles.cache.get('709299440556703816'); //✨Yellow

    const filter = (reaction, user) => ['🖤', '🌫', '🤍', '💗', '💜', '💙', '🧊', '💚', '❤', '🧡', '💛'].includes(reaction.emoji.name) && user.id === message.author.id;

    const embed = new MessageEmbed()
        .setTitle('Available Colors')
        .setDescription(`
        
        🖤 ${black}
        🌫 ${grey}
        🤍 ${white}
        💗 ${pink}
        💜 ${purple}
        💙 ${blue}
        🧊 ${cyan}
        💚 ${green}
        ❤ ${red}
        🧡 ${orange}
        💛 ${yellow}
              
        `)
        .setColor('dd9323')

        
    message.channel.send(embed).then(async msg => {

        await msg.react('🖤');
        await msg.react('🌫');
        await msg.react('🤍');
        await msg.react('💗');
        await msg.react('💜');
        await msg.react('💙');
        await msg.react('🧊');
        await msg.react('💚');
        await msg.react('❤');
        await msg.react('🧡');
        await msg.react('💛');

        msg.awaitReactions(filter, {
            max: 999,
            time: 3000000,
            errors: ['time']
        }).then(collected => {

            const reaction = collected.first();

            switch (reaction.emoji.name) {
                case '🖤':
                    message.member.removeRole(grey);
                    message.member.removeRole(white);
                    message.member.removeRole(pink);
                    message.member.removeRole(purple);
                    message.member.removeRole(blue);
                    message.member.removeRole(cyan);
                    message.member.removeRole(green);
                    message.member.removeRole(red);
                    message.member.removeRole(orange);
                    message.member.removeRole(yellow);
                    message.member.roles.add(black).catch(err => {
                        console.log(err);
                        return message.channel.send(`Error adding you to this role: **${err.message}**.`);
                    });
                    message.channel.send(`${message.author} applied the role ${black}`)
                    msg.delete();
                    break;
                case '🌫':
                    message.member.removeRole(black);
                    message.member.removeRole(white);
                    message.member.removeRole(pink);
                    message.member.removeRole(purple);
                    message.member.removeRole(blue);
                    message.member.removeRole(cyan);
                    message.member.removeRole(green);
                    message.member.removeRole(red);
                    message.member.removeRole(orange);
                    message.member.removeRole(yellow);
                   message.member.addRole(grey).catch(err => {
                        console.log(err);                   
                        return message.channel.send(`Error adding you to this role: **${err.message}**.`);
                    });
                    message.channel.send(`${message.author} applied the role ${grey}`)
                    msg.delete();
                    break;
                case '🤍':
                    message.member.removeRole(black);
                    message.member.removeRole(grey);
                    message.member.removeRole(pink);
                    message.member.removeRole(purple);
                    message.member.removeRole(blue);
                    message.member.removeRole(cyan);
                    message.member.removeRole(green);
                    message.member.removeRole(red);
                    message.member.removeRole(orange);
                    message.member.removeRole(yellow);
                    message.member.addRole(white).catch(err => {
                        console.log(err);
                        return message.channel.send(`Error adding you to this role: **${err.message}**.`);
                    });
                    message.channel.send(`${message.author} applied the role ${white}`)
                    msg.delete();
                    break;
                case '💗':
                    message.member.removeRole(black);
                    message.member.removeRole(grey);
                    message.member.removeRole(white);
                    message.member.removeRole(purple);
                    message.member.removeRole(blue);
                    message.member.removeRole(cyan);
                    message.member.removeRole(green);
                    message.member.removeRole(red);
                    message.member.removeRole(orange);
                    message.member.removeRole(yellow);
                    message.member.addRole(pink).catch(err => {
                        console.log(err);
                        return message.channel.send(`Error adding you to this role: **${err.message}**.`);
                    });
                    message.channel.send(`${message.author} applied the role ${pink}`)
                    msg.delete();
                    break;
                case '💜':
                    message.member.removeRole(black);
                    message.member.removeRole(grey);
                    message.member.removeRole(white);
                    message.member.removeRole(pink);
                    message.member.removeRole(blue);
                    message.member.removeRole(cyan);
                    message.member.removeRole(green);
                    message.member.removeRole(red);
                    message.member.removeRole(orange);
                    message.member.removeRole(yellow);
                        message.member.addRole(purple).catch(err => {
                            console.log(err);
                            return message.channel.send(`Error adding you to this role: **${err.message}**.`);
                        });
                        message.channel.send(`${message.author} applied the role ${purple}`)
                        msg.delete();
                        break;
                case '💙':
                        message.member.addRole(blue).catch(err => {
                            console.log(err);
                            return message.channel.send(`Error adding you to this role: **${err.message}**.`);
                        });
                        message.channel.send(`${message.author} applied the role ${blue}`)
                        msg.delete();
                        break;
                case '🧊':
                        message.member.addRole(cyan).catch(err => {
                            console.log(err);
                            return message.channel.send(`Error adding you to this role: **${err.message}**.`);
                        });
                        message.channel.send(`${message.author} applied the role ${cyan}`)
                        msg.delete();
                        break;
                case '💚':
                        message.member.addRole(green).catch(err => {
                            console.log(err);
                            return message.channel.send(`Error adding you to this role: **${err.message}**.`);
                        });
                        message.channel.send(`${message.author} applied the role ${green}`)
                        msg.delete();
                        break;
                case '❤':
                        message.member.addRole(red).catch(err => {
                            console.log(err);
                            return message.channel.send(`Error adding you to this role: **${err.message}**.`);
                        });
                        message.channel.send(`${message.author} applied the role ${red}`)
                        msg.delete();
                        break;
                case '🧡':
                        message.member.addRole(orange).catch(err => {
                            console.log(err);
                            return message.channel.send(`Error adding you to this role: **${err.message}**.`);
                        });
                        message.channel.send(`${message.author} applied the role ${orange}`)
                        msg.delete();
                        break;
                case '💛':
                        message.member.addRole(yellow).catch(err => {
                            console.log(err);
                             return message.channel.send(`Error adding you to this role: **${err.message}**.`);
                        });
                        message.channel.send(`${message.author} applied the role ${yellow}`)
                        msg.delete();
                        break;
            }
        }).catch(collected => {
            return message.channel.send(`I couldn't add you to this role.`);
        });

    });

};

exports.help = {
    name: 'colors'
};
