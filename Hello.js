var i=0;
while (i<10){
        process.stdout.write("Hello,World!!\n");
        i++;
}
var j=0;
do{
        process.stdout.write("do Hello,World!!\n");
        j++;
}while(j<10);
for(let k=0;k<10;k++){
        process.stdout.write("for Hello,World!!\n");
}

//#const fs = require('fs');
//const msg = fs.readFileSync("Hello.js",{encoding:"UTF-8"});
//console.log(msg);

//var http = require('http');
//var http = require('http');
//var server = http.createServer(function(req,res){
//      console.log("URL: " + req.url);
//      console.log("Method: " + req.method);
//      console.log("Header[Content-Type]: " + req.headers['content-type']);
//      res.end();
//}).listen(8088);
