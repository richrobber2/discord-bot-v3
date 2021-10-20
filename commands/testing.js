const cooldb = require('quick.db')
module.exports = {
    name: 'testing',
    run: async (client, message, args, Discord) => {
        cooldb.add("test", 100)
        const testing = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTimestamp()
            .setTitle('testing')
            .setDescription(`you did not provide 2 numbers ${cooldb.fetch("test")}}`);
            message.channel.sendEmbed(testing)
    }
}