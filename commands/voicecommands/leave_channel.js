const commando = require('discord.js-commando');

class LeaveChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'leave',
            group: 'voice commands',
            memberName: 'leave',
            description: 'leaves a voice channel'
        });
    }
    async run(message, args)
    {
       if(message.guild.voiceConnection)
       {
           message.guild.voiceConnection.disconnect();
       }
       else
       {
           message.reply("I'm not even there");
       }
    }
}


module.exports = LeaveChannelCommand;