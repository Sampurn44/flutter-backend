const http = require('http');
const server= http.createServer((req, res) => {
    if(req.url === '/'){
        res.write("Hello WOrld");
        res.end();
    }
    if(res.url==="/api/course")
});

server.listen(3000);
console.log("Listening on 3000");