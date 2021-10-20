const prefix = require('../config/config.json')
const dateformat = require('dateformat')
const number = require('easy-number-formatter')

module.exports = {
    name: 'serverinfo',
    run: async (client, message, args, Discord) => {
        const infos = new Discord.MessageEmbed()
            .setColor('#b434eb')
            .setThumbnail(message.guild.iconURL())
            .setTitle(`Server Info - ${message.guild.name}`)
            .addField("Server Name", `${message.guild.name}`, true)
            .addField("Server Owner", `${message.guild.owner}`, true)
            .addField("ID", `${message.guild.id}`)
            .addField("Member Count", `${number.formatNumber(message.guild.memberCount)}`)
            .addField("Creation Date", dateformat(`${message.guild.createdAt}`, 'dddd, mmmm dS, yyyy'))
            .setFooter("Made by LachlanDev#8014", "https://cdn.discordapp.com/avatars/365350852967399454/ce6e6e91fa887aa86e23ef356c9878fe")
        message.channel.sendEmbed(infos)
    }
}
module.exports.details = {
    name: 'Server Info',
    author: 'LachlanDev#8014',
    icon: 'https://cdn.discordapp.com/avatars/365350852967399454/ce6e6e91fa887aa86e23ef356c9878fe',
    description: 'Sends information about the current server!',
    usage: `${prefix.prefix}serverinfo`
}