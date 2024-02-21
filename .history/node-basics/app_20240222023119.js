const http = require('http');
const server= http.createServer((req, res) => {
    if(req.url === '/'){
        res.write("Hello WOrld");
        res.end();
    }
    if(req.url==="/api/course"){
        res.write(JSON.stringify([8,5,2]));
        res.end();
    }
});

server.listen(3000);
console.log("Listening on 3000");