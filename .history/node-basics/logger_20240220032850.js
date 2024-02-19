// const app= require('./app');
// const path= require('path');
// // console.log(app);

// //app.sayHello("Hitshu Abe");
// var pathObj =path.parse(__filename);
// console.log(pathObj);
const os= require('os');
var totalMemory= os.totalmem();
var freeMemory= os.freemem();
var a=1024*1024*1024;
console.log(`Total memory: ${totalMemory/a} bytes`);
console.log(`Free memory: ${freeMemory/a} bytes`);