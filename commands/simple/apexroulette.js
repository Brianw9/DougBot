const commando = require('discord.js-commando');

class apexRouletteCommand extends commando.Command
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
        var dropAreaRoll = Math.floor(Math.random() * 18) + 1;
        var prefixRoll = Math.floor(Math.random() * 3) + 1;
        var dropAreas = ["Slum Lakes", "Runoff", "The Pit", "Artillery", "Cascades", "Relay", "Wetlands", "Bunker", "Airbase", "Bridges",
         "Skull Town", "Airbase", "Bridges", "Skull Town", "Thunderdome", "Water Treatment", "Market", "Hydro Dam", "Repulsor", "Swamps", "HOTZONE BOIIIIII"];
        var prefixes = ["Go ", "Buckle up, we're goin\' ", "Really? Alright just go to "]
        
        message.channel.send(prefixes[prefixRoll] + dropAreas[dropAreaRoll]);

    }
}


module.exports = apexRouletteCommand;