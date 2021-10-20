const prefix = require('../config/config.json')
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'ping',
    run: async (client, message, args, Discord) => {
        const ping = new MessageEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setTitle('🏓╎Pong!')
            .setDescription(`🏠╎Websocket Latency: ${client.ws.ping}ms\n🤖╎Bot Latency: ${Date.now() - message.createdTimestamp}ms`);
        message.channel.send({ embeds: [ping] });
    }
}
module.exports.details = {
    name:'Ping',
    author:'Sarah-SAS#4206',
    icon:'https://cdn.discordapp.com/avatars/633668381954015235/9b0672791e6f9d3d2319b37bc861b5e5',
    description:'This command will tell you the ping of the bot',
    usage:`${prefix.prefix}ping`
}