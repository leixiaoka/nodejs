///******** Node.js 全局对象 ********************************///
console.log(__filename);
console.log(__dirname);
function printHello() {
  console.log("Hello, World!");
}
// var t =setTimeout(() => {
//   printHello();
// }, 2000);

// clearTimeout(t);

setInterval(printHello,2000);