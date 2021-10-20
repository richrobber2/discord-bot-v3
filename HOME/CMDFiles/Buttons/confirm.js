const {
    MessageActionRow,
    MessageButton,
    Message,
    User
} = require('discord.js');
module.exports = {
    name: 'confirm-cash', // Must be same as button's Custom Id
    // Check below for avaliable optional options that can be used he
    run: async (client, interaction, Discord) => {
        console.log(interaction.member.user.id)
        if (interaction.member.user.id == 633668381954015235) {
            const revert = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                    .setCustomId('revert')
                    .setLabel('revert?')
                    .setStyle('PRIMARY'),
                );
            interaction.update({
                content: 'the donation has been confirmed',
                components: []
            });
            interaction.followUp(`The donation has been confirmed by ${interaction.member.user.username} `)
        } else {
            interaction.reply("you do not have permissions to run this command")
        }
    }
}
module.exports.details = {
    name:'confirm',
    author:'Sarah-SAS#4206',
    icon:'https://cdn.discordapp.com/avatars/633668381954015235/9b0672791e6f9d3d2319b37bc861b5e5',
    description:'This is not a command its a button',
    usage:`Not a command`
}