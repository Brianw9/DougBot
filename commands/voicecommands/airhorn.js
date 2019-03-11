const commando = require('discord.js-commando');
const ytdl = require('ytdl-core');
const opus = require('opusscript');

class AirhornCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'airhorn',
            group: 'voice commands',
            memberName: 'airhorn',
            description: 'MLG babee',
            throttling: {
                usages: 2,
                duration: 30
            }
        });
    }
    async run(message, args) {
        var VC = message.member.voiceChannel;
        if (message.member.voiceChannel) {
            VC.join()
                .then(connection => {
                    const dispatcher = connection.playStream(ytdl(
                        'https://www.youtube.com/watch?v=Tqo-v-zeZ24', {
                            filter: 'audioonly',
                            volume: 0
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

module.exports = AirhornCommand;