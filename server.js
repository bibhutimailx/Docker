var http = reqiure('http');

 http.createServer(function (req,res){
   res.write('Hello World!');
   res.end();
 }).listen(8000);
