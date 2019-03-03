const commando = require('discord.js-commando');
const ytdl = require('ytdl-core');
const opus = require('opusscript');

class JoinChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'gotti',
            group: 'voice commands',
            memberName: 'gotti',
            description: 'See how many people will say \'Hello?\' GOTTI'
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
                    'https://www.youtube.com/watch?v=wnedkVrgFF0',
                    { filter: 'audioonly' }));
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
