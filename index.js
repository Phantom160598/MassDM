const discord = require("discord.js");

const config = require("./config.json");
const utils = require("./utils/util.js");

const client = new discord.Client();
const util = new utils.Utils(client, process.cwd())
module.exports = { client, config };

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

util.loadModules("events");
util.loadModules("commands", true)

client.login("ODE1MjM5Mzg0NjYzMzI2NzQy.YDpg1w.dvwsqE1fAA6s-J2G5jUo6rT2cSE");
