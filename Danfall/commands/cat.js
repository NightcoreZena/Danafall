const cheerio = require('cheerio')
const request = require('request')
const discord = require("discord.js");
const botConfig = require("../botConfig.json");
var color = (botConfig.color)

module.exports.run = async (bot, message, args) => {
    image(message)

    function image(message) {

        var options = {
            url: "http://results.dogpile.com/serp?qc=images&q=" + "cats",
            method: "GET",
            headers: {
                "Accept": "text/html",
                "User-Agent": "Chrome"
            }
        }

        request(options, function (error, response, responseBody) {
            if (error) {
                return
            }


            body = cheerio.load(responseBody)

            var links = body(".image a.link")

            var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"))

            if (!urls.length) {
                return
            }
            var embed = new discord.MessageEmbed()
                .setColor(color)
                .setImage(urls[Math.floor(Math.random() * urls.length)])
                .setFooter(`Requested by ${message.author.tag} | ${message.author.id}`)
            message.channel.send(embed)
        })
    }
}