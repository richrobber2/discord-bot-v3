const prefix = require('../../../../config/config.json')
module.exports = {
    name: 'reboot',
    ownerOnly: true,
    run: async (client, message, args, MessageEmbed) => {

        message.channel.send({
            content: "Restarting . . ."
        }).then(() => {
            process.on("exit", () => {
                require("child_process").spawn(process.argv.shift(), process.argv, {
                    cwd: process.cwd(),
                    detached: true,
                    stdio: "inherit",
                });
            });
            process.exit();
        })


    }
}
module.exports.details = {
    name:'reboot',
    author:'Sarah-SAS#4206',
    icon:'https://cdn.discordapp.com/avatars/633668381954015235/9b0672791e6f9d3d2319b37bc861b5e5',
    description:'to be added',
    usage:`${prefix.prefix}reboot`
}