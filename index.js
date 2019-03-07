const Commando = require('discord.js-commando');
const Config = require('./config.json')
const bot = new Commando.Client({
    disableEveryone: true,
    unknownCommandResponse: false,
    owner: Config.OWNER
});

const opus = require('opusscript');
const ytdl = require('ytdl-core');

var isReady = true;



bot.registry.registerGroup('simple commands', 'Simple Commands');
bot.registry.registerGroup('voice commands', 'Voice Commands');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');



bot.on('ready', function(){
    bot.user.setPresence({
        game: {
            name: 'you sleep ( ͡° ͜ʖ ͡°)',
            type: 3
        }
    });
    console.log("Ready!")
});

bot.login(Config.TOKEN);