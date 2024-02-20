
const os= require('os');
var totalMemory= os.totalmem();
var freeMemory= os.freemem();
var a=1024*1024*1024;
console.log(`Total memory: ${totalMemory/a} Gigabytes`);
console.log(`Free memory: ${freeMemory/a} Gigabytes`);