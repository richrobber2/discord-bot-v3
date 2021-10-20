const { Collection, Client, Discord, MessageEmbed, Intents, Options} = require('discord.js')
const Enmap = require("enmap");
const fs = require("fs");
json = require('json-update');

const client = new Client({
	makeCache: Options.cacheEverything(),
    intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_BANS,
],
partials: ["CHANNEL"]
})
global.HOME = __dirname
client.config = require(`${HOME}/config/config.json`)
require('figlet')("loading", (err, data) => console.log(data))
client.login(process.env.token || client.config.token)
exports.client = client
client.commands = new Collection()
client.aliases = new Collection()
const { Handler, commandFiles } = require(`${HOME}/Home/Classes/Handler`)
Handler.loadCommands(client)    // COMMAND HANDLER
Handler.loadEvents(client)     // EVENT HANDLER
Handler.loadButtons(client)     // BUTTON HANDLER
Handler.loadSelectMenus(client)     // SELECTMENUS HANDLER
Handler.getSlashCount() // TO GET SLASH COUNT.
Handler.loadErrorManager(client)     // ERRORHANDLER HANDLER
const config = require('./config/config.json')
const settings = require('./config/settings.json')
client.commands = new Enmap();
chalk = require('chalk');
client.config = config;

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap()

client.on("ready", () => {
  client.user.setActivity('Set Activity', { type: 'WATCHING' });
});

client.login(config.token)

exports.client = client;