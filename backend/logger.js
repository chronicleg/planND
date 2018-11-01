    const EventEmitter = require('events'); 

    var url = 'http://mylogger.io/log'; 

    class Logger extends EventEmitter{
        // Send an HTTP request
        log(message) {
        console.log(message);

        // Raise an event
        this.emit('messageLogged', { id: 1, url: 'http://...'}); 
    }
    }
   

module.exports = Logger; //makes log function global
