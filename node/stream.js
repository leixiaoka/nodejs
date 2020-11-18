// **********从流中读取数据****************************///
var fs = require("fs");

/*var data = "";

var readerStream = fs.createReadStream("input.txt");

readerStream.setEncoding("UTF8");

readerStream.on("data", function(chunk){
  data += chunk;
});

readerStream.on("end", function() {
  console.log(data);
});

readerStream.on("error", function(err) {
  console.log(err.stack);
});

console.log("程序执行完毕");*/


// **********写入流****************************///
/*var data = "写入数据到文件里";
var writerStream = fs.createWriteStream("output.txt");

writerStream.write(data, "UTF8");

writerStream.end();

writerStream.on("finish", function(){
  console.log("写入完成");
});

writerStream.on("error", function(err) {
  console.log(err.stack);
});
console.log("程序执行完毕");*/


// **********管道流****************************///
/* var readerStream = fs.createReadStream("input.txt");
var writerStream = fs.createWriteStream("output.txt");
readerStream.pipe(writerStream);
console.log("程序执行完毕"); */


// **********链式流：压缩文件****************************///
/* var zlib = require("zlib");

fs.createReadStream("input.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("input.txt.gz"));

console.log("文件压缩完成"); */


// **********链式流：解压文件****************************///

var zlib = require("zlib");
fs.createReadStream("input.txt.gz")
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream("input2.txt"));

  console.log("文件解压完成");