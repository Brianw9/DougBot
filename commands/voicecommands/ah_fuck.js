const commando = require('discord.js-commando');
const ytdl = require('ytdl-core');
const opus = require('opusscript');

class AhFuckCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'ahfuck',
            group: 'voice commands',
            memberName: 'ahfuck',
            description: 'I can\'t believe you\'ve done this',
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
                        'https://www.youtube.com/watch?v=H6VSWCs7d1w&t=4', {
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

module.exports = AhFuckCommand;