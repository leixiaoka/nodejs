/*********** Node.js 常用工具 **************************************/
const util = require("util");

/***** util.callbackify ******* */

// async function fn() {
//   return "Hello World";
// }

// const callbackFunction = util.callbackify(fn);

// callbackFunction((err,ret) => {
//   if(err) throw err;
//   console.log(ret);
// })

// function fn() {
//   return Promise.reject(null);
// }

// const callbackFunction = util.callbackify(fn);

// callbackFunction((err, ret) => {
//   err && err.hasOwnProperty('reason') && err.reason === null;
// })


/***** util.inherits ******* */

/*
function Base() {
  this.name = "base";
  this.base = 1991;
};

Base.prototype.sayHello = function(){
  console.log('Hello ' + this.name);
};
Base.prototype.showName = function(){
  console.log(this.name);
};

function Sub(){
  this.name = "sub";
};

util.inherits(Sub, Base);

var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
objSub.sayHello();
console.log(objSub);
*/

/***** util.inspect ******* */
function Person(){
  this.name = "leili";
  this.toString = function(){
    return this.name;
  };
}

var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));


/***** util.inspect ******* */
console.log(util.isArray([]));
console.log(util.isArray(new Array));
console.log(util.isArray({}));


/***** util.isDate ******* */
console.log(util.isDate(new Date()));
console.log(util.isDate(Date()));
console.log(util.isDate({}));




