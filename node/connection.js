/**
 * express接收html传递的参数
 */
var express = require("express");
var app = express();
var mysql = require("mysql");

/**
 * 配置MySql
 */
var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '123456',
  database: 'user',
  port: '3306'
});
connection.connect();

/**
 * 实现登录验证功能
 */
app.get('/',function(req,res){
  res.sendFile(__dirname + "/" + "login.html");
})
app.get('/login', function(req,res){
  var name = req.query.name;
  var pwd = req.query.pwd;
  var selectSQL = "select * from user_tbl where user_name='"+ name +"' and user_password = '"+ pwd +"'";
  connection.query(selectSQL,function(err,rs){
    console.log("11111");
    if(err) throw err;
    console.log(rs);
    if(rs != []){
      console.log("OK");
    }
    // res.sendFile(__dirname + "/" + "user.html");
  })
})

/**
 * 实现注册功能
 */
app.get('/register.html', function(req,res){
  res.sendFile(__dirname + "/" + "register.html");
});
app.get('/register',function(req,res){
  var name = req.query.name;
  var pwd = req.query.pwd;
  var user = {user_name:name,user_password:pwd};
  connection.query('insert into user_tbl set ?',user,function(err,rs){
    console.log("22222");
    if(err) throw err;
    if(!rs){
      console.log("OK");
    }
    
    // res.sendFile(__dirname + "/" + "login.html");
  })
})

var server = app.listen(7766,function(){
  console.log("Start");
})