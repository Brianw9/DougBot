'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var DougbotSchema = new Schema({
    guild_id: {
        type: Number,
        required: true,
        unique: true
    },
    channel_id: {
        type: Number,
        required: true,
        unique: true,
    },
    command: {
        type: String,
        required: 'enter the command name'
    }

})

module.exports = mongoose.model('Dougbot', DougbotSchema);

//need to make multiple schemas in another file to layer the api