var mysql = require('mysql');

var connection = mysql.createConnection({
  host : 'localhost',
  user : 'student',
  password : 'student',
  database : 'chat',
});

// Retrieves information from the SQL table
module.exports.retrieveMessage = function (table, callback) {
  connection.query(`SELECT * FROM ?`, [table], function(error, results){
    if(error){
      console.log(error);
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

module.exports.retrieveUsers = function (query, callback) {
  connection.query(`SELECT id FROM users WHERE name = ?`, query, function(error, results){
    if(error){
      console.log(error);
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

// Sends information to the SQL Table
module.exports.insertMessage = function (query, callback) {
  connection.query(`INSERT INTO messages (users, message, roomname) VALUES (?)`, query, function(error, results, fields){
    if(error){
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

module.exports.insertUser = function (query, callback) {
  connection.query(`INSERT INTO users (name) VALUES (?)`, query, function(error, results, fields){
    if(error){
      callback(error);
    } else {
      callback(null, results);
    }
  });
};