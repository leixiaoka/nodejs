var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'user'
});
 
connection.connect();
 
var  sql = 'SELECT * from user_tbl';
connection.query(sql, function (error, results) {

// var  addSql = 'INSERT INTO user_tbl(user_name,user_password) VALUES(?,?)';
// var  addSqlParams = ['admin', '123456'];
// connection.query(addSql, addSqlParams, function (error, results) {
  console.log("1111111");
  if(error){
    console.log(error.message);
    return;
  }
  console.log('--------------------------SELECT----------------------------');
  console.log(results);
  console.log('------------------------------------------------------------\n\n');  
});

connection.end();