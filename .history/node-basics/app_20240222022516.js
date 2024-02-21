const http = require('http');
const server= http.createServer((req, res) => {
    if(req.url='/'){}
});

server.listen(3000);
console.log("Listening on 3000");