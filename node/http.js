/*********** Node.js GET/POST请求 **************************************/

var http = require("http");
var util = require("util");

/***** 获取GET请求内容 ******* */
//var url = require("url");
/*http.createServer(function(req,res){
  res.writeHead(200, {"Content-Type" : "text/plain;charset=utf-8"});

  // res.end(util.inspect(url.parse(req.url,true)));

  // 获取 URL 的参数
  var params = url.parse(req.url,true).query;
  res.write("网站名：" + params.name);
  res.write("网站URL：" + params.url);
  res.end();

}).listen(3000);*/


/***** 获取 POST 请求内容 ******* */
var querystring = require('querystring');
var postHTML = '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';
http.createServer(function(req,res){
  var body = "";
  req.on("data",function(chunk){
    body += chunk;
  });
  req.on("end",function(){
    body = querystring.parse(body);
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    if(body.name && body.url) { // 输出提交的数据
      res.write("网站名：" + body.name);
      res.write("<br>");
      res.write("网站 URL：" + body.url);
    } else {  // 输出表单
      res.write(postHTML);
    }
    res.end();
  });
}).listen(3000);



