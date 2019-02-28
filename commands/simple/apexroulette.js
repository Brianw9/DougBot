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
        var diceRoll = Math.floor(Math.random() * 18) + 1;
        if (diceRoll == 1)
        {
            message.channel.send("Go Slum Lakes");
        }
        if (diceRoll == 2)
        {
            message.channel.send("Drop Runoff");
        }
        if (diceRoll == 3)
        {
            message.channel.send("Drop at The Pit");
        }
        if (diceRoll == 4)
        {
            message.channel.send("Drop Artillery");
        }
        if (diceRoll == 5)
        {
            message.channel.send("Drop Cascades")
        }
        if (diceRoll == 6)
        {
            message.channel.send("Drop Relay")
        }
        if (diceRoll == 7)
        {
            message.channel.send("Drop Wetlands")
        }
        if (diceRoll == 8)
        {
            message.channel.send("Drop Bunker")
        }
        if (diceRoll == 9)
        {
            message.channel.send("Drop Airbase")
        }
        if (diceRoll == 10)
        {
            message.channel.send("Drop Bridges")
        }
        if (diceRoll == 11)
        {
            message.channel.send("Drop Skull Town")
        }
        if (diceRoll == 12)
        {
            message.channel.send("Drop Thunderdome")
        }
        if (diceRoll == 13)
        {
            message.channel.send("Drop Water Treatment")
        }
        if (diceRoll == 14)
        {
            message.channel.send("Drop Market")
        }
        if (diceRoll == 15)
        {
            message.channel.send("Drop Hydro Dam")
        }
        if (diceRoll == 16)
        {
            message.channel.send("Drop Repulsor")
        }
        if (diceRoll == 17)
        {
            message.channel.send("Drop Swamps, easy win, easy life.")
        }
        if (diceRoll == 18)
        {
            message.channel.send("HOTZONE BOIIIIII")
        }


    }
}


module.exports = apexRouletteCommand;