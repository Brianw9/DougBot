const commando = require('discord.js-commando');

class ApexRouletteCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'apexroulette',
            group: 'simple commands',
            memberName: 'apexroulette',
            description: 'Blame the loss on the bot'
        });
    }
    async run(message, args)
    {
        var dropAreaRoll = Math.floor(Math.random() * 19 + 1);
        var prefixRoll = Math.floor(Math.random() * 2 + 1);
        var dropAreas = ["Slum Lakes", "Runoff", "The Pit", "Artillery", "Cascades", "Relay", "Wetlands", "Bunker", "Bridges",
         "Skull Town", "Airbase", "Thunderdome", "Water Treatment", "Market", "Hydro Dam", "Repulsor", "Swamps", "HOTZONE BOIIIIII", "Straight down :eyes:"];
        var prefixes = ["Go ", "Buckle up, we're goin\' ", "Really? Alright just go to "]
        
        message.channel.send(prefixes[prefixRoll] + dropAreas[dropAreaRoll]);

    }
}


module.exports = ApexRouletteCommand;