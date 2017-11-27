//main.js 
//模块接口的唯一变化是使用 module.exports = Hello 代替了exports.world = function(){}。 
//在外部引用该模块时，其接口对象就是要输出的 Hello 对象本身，而不是原先的 exports。
var Hello = require('./hello'); 
hello = new Hello(); 
hello.setName('BYVoid'); 
hello.sayHello(); 