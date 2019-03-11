const commando = require('discord.js-commando');
const getJSON = require("get-json")
class ddgCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'ddg',
      group: 'simple commands',
      aliases: ['duckduckgo', 'google'],
      memberName: 'ddg',
      description: 'Get some quick info from DuckDuckGo',
      args: [{
        key: 'text',
        prompt: 'Enter your search query',
        type: 'string'
      }]
    });
  }
  async run(message, {
    text
  }) {
    text = text.replace(/\s/g, '+');
    var newURL = "https://api.duckduckgo.com/?q=" + text + "&format=json&t=Dougbot_Github_Brianw9"
    getJSON(newURL, function (error, response) {
      if (response.Results.length > 0) {
        message.channel.send({
          "embed": {
            "title": response['Results'][0]['FirstURL'],
            "description": response.AbstractText,
            "color": 16532311,
            "thumbnail": {
              "url": "https://www.techwyse.com/blog/wp-content/uploads/2015/01/DuckDuckGo.png"
            },

            "author": {
              "name": "DuckDuckGo Search",
              "url": "https://DuckDuckGo.com",
              "icon_url": "https://www.techwyse.com/blog/wp-content/uploads/2015/01/DuckDuckGo.png"
            },
            "image": {
              "url": response.Image
            },
          }
        });
      } else if (response.Results.length == 0) {
        message.channel.send({
          "embed": {
            "title": response.AbstractURL,
            "description": response.AbstractText,
            "color": 16532311,
            "thumbnail": {
              "url": "https://www.techwyse.com/blog/wp-content/uploads/2015/01/DuckDuckGo.png"
            },

            "author": {
              "name": "DuckDuckGo Search",
              "url": "https://DuckDuckGo.com",
              "icon_url": "https://www.techwyse.com/blog/wp-content/uploads/2015/01/DuckDuckGo.png"
            },
            "image": {
              "url": response.Image
            },
          }
        });
      } else {
        message.channel.send("DuckDuckGo doesn't have an instant search for that :(");
      }
    }).catch(console.error);
  }
}


module.exports = ddgCommand;