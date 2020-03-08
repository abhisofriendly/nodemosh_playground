const EventEmitter = require('events');

var x="";
var url="http://www.google.com";
class Logger extends EventEmitter{
     log(message){
        // send an http requrest
        console.log(message)
        this.emit('messageLogged',{id:1,url:'http'})
    }
}

module.exports=Logger;



