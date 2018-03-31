var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(data){
        res.write(data);
        res.end();
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      
      res.end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('Im here');
      models.messages.get(function(data){
        res.write(data);
        res.end();
      });
    },
    post: function (req, res) {
      console.log('hi');
      res.end();
    }
  }
};

