var http = require('http');

http.createServer(function(req,res){
        res.writeHead(200,{'Content-Type': 'text/plain\n\n'});
//      socket.write('This is RLS Tech News Echo Server\r^n');
        res.end('hello,World\n');
}).listen(1337);
