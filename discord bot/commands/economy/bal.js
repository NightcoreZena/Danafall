const discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const botConfig = require("../../botconfig.json");
var color = (botConfig.color);
module.exports.run = async (bot, message, args) => {
    let user = message.mentions.users.first() || message.author
    let money = db.fetch(`money_${user.id}`)

    if (money === null) money = 0

    message.channel.send(`${user} {{must be embed}} ${money} .`)



}
