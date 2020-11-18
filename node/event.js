/************* EventEmitter 的用法 **************************/
/*var EventEmitter = require("events").EventEmitter;
var event = new EventEmitter();
event.on("some_event", function(){
  console.log("some_event事件触发");
});
setTimeout(() => {
  event.emit("some_event");
}, 1000);*/



/************* EventEmitter 的用法----加参数 **************************/
/*var events = require("events");
var emitter = new events.EventEmitter();
emitter.on("someEvent", function(arg1,arg2){
  console.log("listener1", arg1, arg2);
});
emitter.on("someEvent", function(arg1,arg2){
  console.log("listener2",arg1,arg2);
});
emitter.emit("someEvent","arg1参数","arg2参数");*/



/************* EventEmitter 类的应用 **************************/
var events = require("events");
var eventEmitter = new events.EventEmitter();

var listener1 = function  listener1() {
  console.log("监听器 listener1 执行。");
}

var listener2 = function  listener2() {
  console.log("监听器 listener2 执行。");
}

eventEmitter.addListener("connection", listener1);
eventEmitter.on("connection", listener2);

var eventListeners = eventEmitter.listenerCount("connection");
console.log(eventListeners + "个监听器监听连接事件22222");

eventEmitter.emit("connection");

eventEmitter.removeListener("connection",listener1);
console.log("listener1不再受监听。");

eventEmitter.emit("connection");

eventListeners = eventEmitter.listenerCount("connection");
console.log(eventListeners + "个监听器监听连接事件11111");

console.log("程序执行完毕。");