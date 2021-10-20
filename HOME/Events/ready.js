var figlet = require('figlet');
const lolcatjs = require('lolcatjs');
const vers = require("../../config/version.json")
const config = require("../../config/config.json")
const discord = require('../../bot.js')
module.exports = {
    name: 'ready',
    once: true,
    run: async (client) => {
        const chalk = require('chalk')
        client.user.setActivity('your servers.', {
            type: `WATCHING`,
        });
        var banner = figlet.textSync('Discord BOT Dashboard V2', {
            font: 'Small',
            horizontalLayout: 'default',
            width: 4000,
            whitespaceBreak: true
        });
        lolcatjs.fromString(banner);
        console.log(chalk.bold.green('Launched Succesfully...'))
        console.log(chalk.magenta('Version:'), chalk.cyan(`${vers.ver}`))
        console.log(chalk.magenta('Made by:'), chalk.cyan('LachlanDev#8014'))
        console.log(chalk.magenta('some alterations by:'), chalk.cyan('Sarah-SAS#4206'))
        console.log(chalk.magenta('Prefix:'), chalk.cyan(`${config.prefix}\n`))
        console.log(chalk.green(chalk.bold(`${discord.client.user.username}`), `is online!`))
        console.log(chalk.green(chalk.bold(`Dashboard:`), `http://localhost:` + config.port))
        const info = require(HOME + "/Home/Classes/Handler")
        info.Handler.loadSlashCommands(client) // SLASHCMDS HANDLER, MUST BE IN READY EVENT.
        console.log(chalk.bold.yellowBright("[Bot] ") + chalk.bold.blueBright(`Connecting to sqlite database was a success maybe?(support for this to be made)`))
        console.log(chalk.bold.yellowBright("[Bot] ") + chalk.bold.blueBright(`Connected to ${client.user.tag}`))
        if (info.commandFiles.length > 0) console.log(chalk.bold.redBright("[Handler]") + chalk.bold.greenBright(` Loaded ${info.commandFiles.length} commands.`))
        if (info.aliasesCount.length > 0) console.log(chalk.bold.whiteBright("[Handler]") + chalk.bold.magentaBright(` Loaded ${info.aliasesCount.length} aliases.`))
        if (info.eventFiles.length > 0) console.log(chalk.bold.greenBright("[Handler]") + chalk.bold.cyanBright(` Loaded ${info.eventFiles.length} events.`))
        if (info.buttonFiles.length > 0) console.log(chalk.bold.yellow("[Handler]") + chalk.bold.blue(` Loaded ${info.buttonFiles.length} buttons.`))
        if (info.selectMenuFiles.length > 0) console.log(chalk.bold.white("[Handler]") + chalk.bold.green(` Loaded ${info.selectMenuFiles.length} selectMenus.`))
        if (info.slashCount.length > 0) console.log(chalk.bold.red("[Handler]") + chalk.bold.yellow(` Loaded ${info.slashCount.length} slashCommands.`))
    },
};