const discord = require("discord.js")
const botConfig = require("../../botconfig.json");
var color = (botConfig.color)

module.exports.run = async (bot, message, args) => {


    const ticketCategorieID = "727095524716576859";

    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You cant close this ticket")
    if(message.channel.parentID == ticketCategorieID) {
        message.channel.delete();
    }else{
        message.channel.send("Please do it in a ticket")
    }



}