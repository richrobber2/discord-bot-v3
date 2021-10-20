const {
    MessageActionRow,
    MessageButton,
    Message,
    User
} = require('discord.js');
const numbro = require('numbro')
const db = require('quick.db')
module.exports = {
    name: 'dcash', // Should be same as Menu Custom Id or The menu options set values.
    run: async (client, interaction, message, Discord) => {
        const confirmpls = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId('confirm-cash')
                .setLabel('user donated confirmed?')
                .setStyle('PRIMARY'),
            )
        
        interaction.update({
            content: "how much cash are you donating?",
            components: [confirmpls]
        }).catch(console.error);

        function followups(params, param) {
            interaction.followUp(`${params}`, )

        }
        const filter = m => m.content;
        const collector = interaction.channel.createMessageCollector({
            filter,
            time: 15000
        })
        collector.on('end', collected => {
            total = 0;
            collected.each(Message => total += parseInt(Message.content))
            db.add(`${interaction.user.id} cash-unconfirmed`, total)
            console.log(interaction.user.id)
            followups(`so you wanted to donate ${numbro(total).format({ average: true, totalLength: 4})} cash? added to database as ${total} amount you have in the bank is ${numbro(db.fetch(`${interaction.user.id} cash-unconfirmed`)).format({ average: true, totalLength: 4})}`)
        });
    }
}