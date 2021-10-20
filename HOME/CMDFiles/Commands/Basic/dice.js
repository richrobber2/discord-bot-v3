const prefix = require('../../../../config/config.json')
module.exports = {
    name: 'dice',
    run: async (client, message, args, Discord) => {
        function random(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
        const rnd = random(args[0], args[1])
        const ping = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setTitle(`Random number between ${args[0]} - ${args[1]}`)
            .setDescription(`${rnd}`);

        const NotANumber = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTimestamp()
            .setTitle('ERROR')
            .setDescription('you did not provide 2 numbers');
        if (args[0] === undefined || args[1] === undefined) {
            message.channel.sendEmbed(NotANumber)
        } else {
            message.channel.sendEmbed(ping)
        }
    }
}
module.exports.details = {
    name:'dice',
    author:'Sarah-SAS#4206',
    icon:'https://cdn.discordapp.com/avatars/633668381954015235/9b0672791e6f9d3d2319b37bc861b5e5',
    description:'its a dice with custom max and custom min',
    usage:`${prefix.prefix}dice`
}