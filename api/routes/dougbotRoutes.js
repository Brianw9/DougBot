'use strict';
module.exports = function(app) {
    var dougbot = require('../controllers/dougbotController');

    //dougbot Routes
    app.route('/guilds')
    .get(dougbot.list_all_tasks)
    .post(dougbot.create_a_task);


  app.route('/guilds/:taskId')
    .get(dougbot.read_a_task)
    .put(dougbot.update_a_task)
    .delete(dougbot.delete_a_task);
};