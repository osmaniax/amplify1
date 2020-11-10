var fs = require('fs');
var rs = fs.readFileSync("index.html",{encoding:"UTF-8"});
var url = require('url');
var http = require('http');
//
var server = http.createServer(function(req,res){
        res.writeHead(200,{'Content-Type':'text/html'});
        var q = url.parse(req.url,true).query;
        var txt = q.year + " " + q.month;
        res.write("<HTML><HEAD><TITLE>Nodejs Test</TITLE></HEAD>");
        res.write("<BODY><H1>Nodejs Test</H1>");
        res.write("\n ");
        res.write(req.url,"\n ");
        res.write(txt);
        res.write(rs);
        console.log("URL: " + req.url);
        console.log("Method: " + req.method);
        console.log("Header[Content-Type]: " + req.headers['content-type']);
        res.end('Hello,Node.js World!!\n');
}).listen(1337);

