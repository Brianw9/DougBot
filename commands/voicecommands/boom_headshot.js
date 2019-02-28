const commando = require('discord.js-commando');
const ytdl = require('ytdl-core');
const opus = require('opusscript');

class JoinChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'boom',
            group: 'voice commands',
            memberName: 'boom',
            description: 'BOOM! HEADSHOT!'
        });
    }
    async run(message, args)
    {
        var VC = message.member.voiceChannel;
        if(message.member.voiceChannel)
        {
        VC.join()
            .then(connection => {
                const dispatcher = connection.playStream(ytdl(
                    'https://www.youtube.com/watch?v=qtTR2-8w6L4',
                    { filter: 'audioonly', volume: 0 }));
                dispatcher.on("end", end => {VC.leave()});
                })
                .catch(console.error);
                }
        else
        {
            message.reply("You aren't in a voice channel.")
        }
    }
}

module.exports = JoinChannelCommand;
