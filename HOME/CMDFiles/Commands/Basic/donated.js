const prefix = require('../../../../config/config.json')
module.exports = {
    name : 'donate',
    run : async(client, message, args, Discord) => {
    	const menus = new Discord.MessageActionRow()
			.addComponents(
				new Discord.MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.addOptions([
						{
							label: 'food',
							description: 'do you know why all the food is green?',
							value: 'dfood',
						},
						{
							label: 'parts',
							description: 'its a dead robot',
							value: 'dparts',
							
						},
						{
							label: 'electricity',
							description: 'thunder?',
							value: 'delectricity',
							
						},
						{
							label: 'gas',
							description: 'hmmm',
							value: 'dgas',
							
						},
						{
							label: 'cash',
							description: 'the stuff is annoying to farm for',
							value: 'dcash',
							
						},
					]),
			);
			message.channel.send({ content:"this is not working yet there is no database yet", components: [menus] })
    }
}
module.exports.details = {
    name:'donate',
    author:'Sarah-SAS#4206',
    icon:'https://cdn.discordapp.com/avatars/633668381954015235/9b0672791e6f9d3d2319b37bc861b5e5',
    description:'to be added',
    usage:`${prefix.prefix}donate`
}