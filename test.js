const EventEmitter= require('events')
const emitter = new EventEmitter();



emitter.on('eventemitter',function(){
    console.log('event emitter in action')
})

emitter.emit('eventemitter')



const EventEmitter = require('events')

//register a listener

//raise an event
const Logger=require('./logger')
const logger=new Logger();


logger.on('messageLogged',(arg)=>{
    console.log('listener called',arg)
})

logger.log('message');