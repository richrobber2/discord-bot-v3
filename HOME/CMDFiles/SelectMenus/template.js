module.exports = {
    name: 'fun', // Should be same as Menu Custom Id or The menu options set values.
    run: async (client, interaction, Discord) => {
        interaction.reply("E")
        setTimeout(deletereply, 10000)
        function deletereply(params) {
            interaction.deleteReply()
        }
        // Refer to selectMenu.js file in Commands/Examples/Menu
    }
}