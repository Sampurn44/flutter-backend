// const app= require('./app');
// const path= require('path');
// // console.log(app);

// //app.sayHello("Hitshu Abe");
// var pathObj =path.parse(__filename);
// console.log(pathObj);
const os= require('os');
var totalMemory= os.totalmem();
var freeMemory= os.freemem();
console.log(`Total memory: ${totalMemory} bytes`);
console.log(`Free memory: ${freeMemory} bytes`);