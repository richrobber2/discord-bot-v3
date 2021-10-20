module.exports = {
    name: "help",
    description: "this command is not working yet!",
    run: async (client, interaction, Discord) => {
        cooldb.add("test", 200)
        const help = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setTitle('Help')
            .setDescription(`this command has not been implemented yet`);
        interaction.reply({
            embeds: [help]
        })
    }
}