module.exports = {
    name: 'evalbtn', // Must be same as button's Custom Id
    ownerOnly: true,
    run: async (client, interaction, Discord) => {
        interaction.message.delete()
    }
}
module.exports.details = {
    name:'evalbtn',
    author:'Sarah-SAS#4206',
    icon:'https://cdn.discordapp.com/avatars/633668381954015235/9b0672791e6f9d3d2319b37bc861b5e5',
    description:'This is not a command its a button',
    usage:`Not a command`
}