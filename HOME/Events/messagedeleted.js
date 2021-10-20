module.exports = {
	name: 'messageDelete', // Name of event that is executed.
	once: true, // Execute event only once. Default: False.
	run: async(client, message) => { // Your event args.) {
        const help = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setTitle('deleted')
            .setDescription(`somebody deleted a message why u do this?`);
		message.channel.sendEmbed()
	},
};