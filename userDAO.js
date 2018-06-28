var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'test',
  port     :  3306
});
module.exports = {
  create : function(object , cb){
    connection.connect();
    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results[0].solution);
    });
    connection.end();
    cb(null, object);
  } ,
  find : function(object, cb){
    connection.connect();
    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results[0].solution);
    });
    connection.end();
    var user = {};
    user.username = "nilesh";
    user.password = "password";
    cb(null, user);
  },
  update : function(object , cb){
    connection.connect();
    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results[0].solution);
    });
    connection.end();

    cb(null,object);
  },
  delete : function(object , cb){
    connection.connect();
    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results[0].solution);
    });
    connection.end();

    var user = {};
    user.message = "success";
    cb(null, user);
  },
  test: function(){

  },
  findall : function(cb){
    test();
    connection.connect();
    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results[0].solution);
    });
    connection.end();

    var user = {};
    user.username = "nilesh";
    user.password = "password";
    cb(null, user);
  }
}
