const commando = require('discord.js-commando');
const ytdl = require('ytdl-core');
const opus = require('opusscript');

class SpaceForceCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'spaceforce',
            group: 'voice commands',
            memberName: 'spaceforce',
            description: 'Looming bassline, provoking thought about our magninimous and woundrous universe',
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
                        'https://www.youtube.com/watch?v=_AUXpnB065o', {
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

module.exports = SpaceForceCommand;