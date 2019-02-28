const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = 'x';
const opus = require('opusscript');
var isReady = true;
const ytdl = require('ytdl-core');


bot.registry.registerGroup('simple commands', 'Simple Commands');
bot.registry.registerGroup('voice commands', 'Voice Commands');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');



bot.on('ready', function(){
    console.log("Ready!")
});

bot.login(TOKEN);