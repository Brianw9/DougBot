const commando = require('discord.js-commando');
const ytdl = require('ytdl-core');
const opus = require('opusscript');

class BillsArePaidCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'bills',
            group: 'voice commands',
            memberName: 'bills',
            description: 'Can\'t tell me nothin\'',
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
                        'https://www.youtube.com/watch?v=hyPdHwiUNrc', {
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

module.exports = BillsArePaidCommand;