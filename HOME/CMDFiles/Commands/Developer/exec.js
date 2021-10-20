const prefix = require('../../../../config/config.json')

module.exports = {
    name: 'exec',
    run: async (client, message, args, Discord) => {
        const row = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageButton()
                .setCustomId('evalbtn')
                .setLabel('Delete Output')
                .setStyle('DANGER'),
            );
        const { exec } = require("child_process")
        let lola = args.join(" ")
        if (!lola) return message.channel.send("Please provide what to execute in the terminal!")
        exec(`${lola}`, (error, stdout) => {
            let response = (error || stdout)
            if (error) {
                const erro = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('🎄╎Terminal')
                    .setDescription(`\`\`\`kt
${error.message}\`\`\``)
                    .setTimestamp();
                message.channel.send({
                    embeds: [erro],
                    components: [row]
                })
            } else {
                const result = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle('🎄╎Terminal')
                    .setDescription(`\`\`\`kt
${response}\`\`\``)
                    .setTimestamp();
                message.channel.send({
                    embeds: [result],
                    components: [row]
                })
            }
        })

    }
}
module.exports.details = {
    name:'exec',
    author:'Sarah-SAS#4206',
    icon:'https://cdn.discordapp.com/avatars/633668381954015235/9b0672791e6f9d3d2319b37bc861b5e5',
    description:'to be added',
    usage:`${prefix.prefix}exec`
}