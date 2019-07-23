const commando = require('discord.js-commando');

class OWOCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'owo',
            group: 'simple commands',
            memberName: 'owo',
            description: 'OwO What\'s this?',
            args: [{
                key: 'text',
                prompt: 'What do you want to OwO?',
                type: 'string'
            }]
        });
    }
    async run(message, {
        text
    }) {

        text = text;

        var final_text = "";

        for (var letter = 0; letter < text.length; letter++) {
            if (text[letter] == "R") {
                final_text = final_text + "W";
            } else if (text[letter] == "r") {
                final_text = final_text + "w";
            } else if (text[letter] == "L") {
                final_text = final_text + "W";
            } else if (text[letter] == "l") {
                final_text = final_text + "w";
            } else {
                final_text += text[letter];
            }

        }


        message.channel.send(final_text);

    }
}


module.exports = OWOCommand;