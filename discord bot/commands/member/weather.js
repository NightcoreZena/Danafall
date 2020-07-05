const discord = require("discord.js");
const weather = require("weather-js");
const botConfig = require("../../botconfig.json");
var color = (botConfig.color)

module.exports.run = async (bot, message, args) => {
    let city = args.slice(0).join(" ")

    weather.find({ search: city, degreeType: "C" }, function (err, result) {
        console.log(result)

        let embed = new discord.MessageEmbed()
            .setColor(color)
            .setTitle(result[0].location.name)
            .addField("Temperatuur", `${result[0].current.temperature}℃`, true)
            .addField("Vochtigheid", result[0].current.humidity, true)
            .addField("Lucht", result[0].current.skytext, true)
            .addField("Wind Snelheid", result[0].current.windspeed, true)
            .setThumbnail(result[0].current.imageUrl)
        message.channel.send(embed)

    })
}