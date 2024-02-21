// const fs= require('fs');
// const files=fs.readdirSync('./');
// console.log(files);
const EventEmitter = require('events');
const emitter= new EventEmitter();
emitter.on("Message",function(){console.log("Found it");})
emitter.