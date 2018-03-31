var mysql = require('mysql');

var connection = mysql.createConnection({
  host : 'localhost',
  user : 'student',
  password : 'student',
  database : 'chat',
});

// Retrieves information from the SQL table
module.exports.retrieve = function (table, callback) {
  connection.query('SELECT * FROM ?', [table], function(error, results){
    if(error){
      console.log(error);
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

// Sends information to the SQL Table
module.exports.insert = function (table, field, query, callback) {
  connection.query('INSERT INTO ? (?) VALUES ?', [table, field, query] , function(error, results, fields){
    if(error){
      callback(error);
    } else {
      callback(results);
    }
  });
};