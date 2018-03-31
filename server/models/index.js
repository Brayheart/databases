var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.retrieveMessage(`*`, `messages`, function(err, data) {
        if (err) {
          throw data;
        } else {
          callback(err, data);
        }
      });
    }, // a function which produces all the messages
    post: function (mObj, callback) {
      db.retrieveUsers([mObj.username], function(err, data){
        if(err){
          callback(err)
        } else {
          var userIndex = data;
          console.log('data', data);
          console.log('mobj', mOjb);
          db.insertMessage([data, mObj.message, mObj.roomname], function(err, data){
            callback(err, data);
          });
        }
      }, mObj.username);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.retrieveMessage(`users`, function(err, data) {
        if (err) {
          callback(err);
        } else {
          callback(null, data);
        }
      });
    },
    post: function (username, callback) {
      db.insertUser([username], function(err, data){
        if(err){
          callback(err);
        } else {
          callback(null, data);
        }
      })
    }
  }
};

//          username: 'Valjean',
//           message: 'In mercy\'s name, three days is all I need.',
//           roomname: 'Hello'