// // const fs= require('fs');
// // const files=fs.readdirSync('./');
// // console.log(files);
// const EventEmitter = require('events');
// const emitter= new EventEmitter();
// emitter.on("Message",function(){console.log("Found it");});
// emitter.emit("Message");
// //first listener than emiiter will emit keep in mind
const { Socket } = require('dgram');
const http = require('http');
const server= http.createServer();
server.on("connection",(socket)=>{});