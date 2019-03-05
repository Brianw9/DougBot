const commando = require('discord.js-commando');
var assert = require('assert');
var values = require('object.values');


class TeamRandomCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'teamrand',
            group: 'simple commands',
            memberName: 'teamrand',
            description: 'Team randomizer. Can now support equal weighting.',
            example: 'teamrand User1 = 2, User2 = 1, User3 = 5, User4 = 4',
            args: [
                {
                    key: 'player',
                    prompt: 'Who do you want to split',
                    type: 'string'
                },
            ]
        });
    }
    async run(message, { player })
    {
        if ( player.includes('=') ){
            var playersToSort = {};
            var teamOne = [];
            var teamTwo = [];
            var playerArray = [];

            player = player.replace(/\s/g, '');
            var entries = player.split(",");       
            for (var i=0; i < entries.length; i++) {  // removes all spaces, and parses input string into a map
                var tokens = entries[i].split("=");
                playerArray.push([tokens[0], parseInt(tokens[1])]); //test
                // playersToSort[tokens[0]] = parseInt(tokens[1]);  
            }
            playerArray = playerArray.sort((function(a, b) {
                return a[1] - b[1];
            }));
            var playerList = [];
            for (i = 0; i < playerArray.length; i++){
                playerList.push(playerArray[i][0])
            }
            
            // var playerList = Array.from(Object.values(playersToSort));

            while (playerList.length > 4){
                teamOne.push(" " + playerList.shift());
                teamOne.push(" " + playerList.pop());
                teamTwo.push(" " + playerList.pop());
                teamTwo.push(" " + playerList.shift());
            }
            if (playerList.length == 3) {
                teamOne.push(" " + playerList.pop());
                teamTwo.push(" " + playerList.shift());
                teamTwo.push(" " + playerList.pop());
            }
            if (playerList.length == 2) {
                teamTwo.push(" " + playerList.shift());
                teamOne.push(" " + playerList.pop());
            }
            if (playerList.length == 1) {
                teamOne.push(" " + playerList.pop());
                teamTwo.push(" " + teamOne.shift());
            }
            message.channel.send("Team One: " + teamOne).catch(console.error);
            message.channel.send("Team Two: " + teamTwo).catch(console.error);
        }  else {
            message.reply("You didn't set any weights or formatting is wrong.")
        }
    }
}


module.exports = TeamRandomCommand;