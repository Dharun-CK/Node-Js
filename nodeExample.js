//import http module
var http=require('http');
const server =http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('content-type','text/html');
    res.end("<h1>I am Dharun C.K & I am IronMan</h1>");
});
server.listen(3000);