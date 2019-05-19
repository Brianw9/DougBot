const commando = require('discord.js-commando');
const ytdl = require('ytdl-core');
const opus = require('opusscript');

class LeatherBeltCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'leatherbelt',
            group: 'voice commands',
            memberName: 'leatherbelt',
            description: '4 Stam 4 Strength Leather Belt? Level 18?',
            throttling: {
                usages: 2,
                duration: 30,
            }
        })
    }
    async run(message, args) {
        var VC = message.member.voiceChannel;
        if (message.member.voiceChannel) {
            VC.join()
                .then(connection => {
                    const dispatcher = connection.playStream(ytdl(
                        'https://www.youtube.com/watch?v=6oJ09dboUTk', {
                            filter: 'audioonly'
                        }));
                    dispatcher.on("end", end => {
                        VC.leave()
                    });
                })
                .catch(console.error);
        } else {
            message.reply("You aren't in a voice channel.")
        }
    }
}

module.exports = LeatherBeltCommand;