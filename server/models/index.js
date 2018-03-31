var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.retrieve('messages', function(err, data) {
        if (err) {
          throw data;
        } else {
          callback(data);
        }
      });
    }, // a function which produces all the messages
    post: function (mObj, callback) {
      db.insert('messages', ['username', 'message', 'roomname'], [mObj.username, mObj.message, mObj.roomname], function(data){
        console.log(data);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.retrieve('users', function(err, data) {
        if (err) {
          throw data;
        } else {
          callback(data);
        }
      });
    },
    post: function () {}
  }
};

//          username: 'Valjean',
//           message: 'In mercy\'s name, three days is all I need.',
//           roomname: 'Hello'