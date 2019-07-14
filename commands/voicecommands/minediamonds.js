const commando = require('discord.js-commando');
const ytdl = require('ytdl-core');
const opus = require('opusscript');

class MineDiamondsCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'minediamonds',
            group: 'voice commands',
            memberName: 'minediamonds',
            description: 'Take me away',
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
                        'https://www.youtube.com/watch?v=gOQJD7XC5To', {
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

module.exports = MineDiamondsCommand;