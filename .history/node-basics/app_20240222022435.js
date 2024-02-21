
const { Socket } = require('dgram');
const http = require('http');
const server= http.createServer();
server.on("connection",(socket)=>{
    console.log("Listening on 3000");
});
server.listen(3000);
console.log("Listening on 3000");