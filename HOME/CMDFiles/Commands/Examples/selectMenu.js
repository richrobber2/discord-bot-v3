module.exports = {
    name : 'selectMenu',
    run : async(client, message, args, Discord) => {
    	const menus = new Discord.MessageActionRow()
			.addComponents(
				new Discord.MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.setMaxValues(1)
					.addOptions([
						{
							label: 'food',
							description: 'This is a description',
							value: 'evalbtn',
						},
						{
							label: 'parts',
							description: 'This is also a description',
							value: 'option2',
							
						}
					]),
			);
			message.channel.send({ content:"e", components: [menus] })
    }
}     