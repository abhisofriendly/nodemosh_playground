const http = require('http')

const server = http.createServer(function(req,res){
    if(req.url==="/"){
        res.write('hello')
        res.end();
    }

    if(req.url==="/api/courses"){
        res.write(JSON.stringify([1,2,4]))
        res.end();
    }
       
});
// server.on('connection',function(socket){
//     console.log('server on in action')
// })

server.listen(3000);

console.log('listening on port 3000')