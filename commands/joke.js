const cheerio = require('cheerio')
const giveMeAJoke = require('discord-jokes')
const request = require('request')
const discord = require("discord.js");
const botConfig = require("../botConfig.json");
var color = (botConfig.color)

module.exports.run = async (bot, message, args) => {
    image(message)

    if(!args[0]) return message.channel.send("Use: !joke text or !joke image")


    function image(message) {

        var options = {
            url: "http://results.dogpile.com/serp?qc=images&q=" + "Joke",
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

            if (args[0] == "image") {
                var embed = new discord.MessageEmbed()
                    .setColor(color)
                    .setImage(urls[Math.floor(Math.random() * urls.length)])
                    .setFooter(`Requested by ${message.author.tag} | ${message.author.id}`)
                message.channel.send(embed)

            } else if (args[0] == "text") {
                giveMeAJoke.getRandomDadJoke(function (joke) {
                    var embedstandaard = new discord.MessageEmbed()
                        .setColor(color)
                        .setDescription(joke)
                        .setFooter(`Requested by ${message.author.tag} | ${message.author.id}`)
                    message.channel.send(embedstandaard)

                }
                )
            }
        })

    }
}
