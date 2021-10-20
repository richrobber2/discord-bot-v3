const prefix = require('../../../../config/config.json')
module.exports = {
    name: 'yes-no',
    run: async (client, message, args, Discord) => {
        const yesNo = () => {
            return Math.random() >= 0.5;
        };
        if(yesNo() === true){
            const YesOrNo = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setTitle(`Yes`)
            .setDescription(`I dont know why but yes`);
            message.channel.sendEmbed(YesOrNo)
        }else{
            const YesOrNo = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setTitle(`Yes`)
            .setDescription(`I dont know why but No`);
            message.channel.sendEmbed(YesOrNo)
        }
    }
}
module.exports.details = {
    name:'yes-no',
    author:'Sarah-SAS#4206',
    icon:'https://cdn.discordapp.com/avatars/633668381954015235/9b0672791e6f9d3d2319b37bc861b5e5',
    description:'its just yes or no pretty strait forward',
    usage:`${prefix.prefix}yes-no`
}