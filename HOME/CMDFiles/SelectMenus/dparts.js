const { Message } = require('discord.js');
const numbro = require('numbro')
module.exports = {
    name: 'dparts', // Should be same as Menu Custom Id or The menu options set values.
    run: async (client, interaction, message, Discord) => {
        interaction.update({
            content: "how much parts are you donating?",
            components: []
        }).catch(console.error);

        function followups(params) {
            interaction.followUp(`${params}`)

        }
        const filter = m => m.content;
        const collector = interaction.channel.createMessageCollector({
            filter,
            time: 15000
        })
        collector.
        collector.on('end', collected => {
            total = 0;
            collected.each(Message => total += parseInt(Message.content));
            followups(`so you wanted to donate ${numbro(total).format({ average: true, totalLength: 4})} gas?`)
        });
    }
}