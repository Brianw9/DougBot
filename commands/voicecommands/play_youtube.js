const commando = require('discord.js-commando');
const ytdl = require('ytdl-core');
const opus = require('opusscript');

class PlayYoutubeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'play',
            group: 'voice commands',
            memberName: 'play',
            description: 'Annoy your friends',
            ownerOnly: true,
            throttling: {
                usages: 2,
                duration: 30
            },
            args: [{
                key: 'youtubeURL',
                prompt: 'Youtube link to play',
                type: 'string'
            }]
        });
    }
    async run(message, {
        youtubeURL
    }) {
        var VC = message.member.voiceChannel;
        if (message.member.voiceChannel && youtubeURL.includes("youtube", "youtu.be")) {
            VC.join()
                .then(connection => {
                    const dispatcher = connection.playStream(ytdl(
                        youtubeURL, {
                            filter: 'audioonly'
                        }));
                    dispatcher.on("end", end => {
                        VC.leave()
                    });
                })
                .catch(console.error);
        } else {
            message.reply("You aren't in a voice channel, or that wasn't a Youtube link.")
        }
    }
}

module.exports = PlayYoutubeCommand;