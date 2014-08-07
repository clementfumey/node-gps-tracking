var server = require('tk102')

// start server
server.createServer({
        ip:             '0.0.0.0',  // default 0.0.0.0 (all ips)
        port:           1337,          // default 0 = random, see 'listening' event
        connections:    10,         // simultaneous connections
        timeout:        10          // idle timeout in seconds
})

// incoming data
server.on( 'track', function( gps ) {
        console.log( gps )
})
//incoming connection
server.on( 'connection', function( socket ) {
        console.log( 'Connection from '+ socket.remoteAddress )
})

//Connection expires
server.on( 'timeout', function( socket ) {
        console.log( 'Time-out from '+ socket.remoteAddress )
})

//Failt to parse data
server.on( 'fail', function( err ) {
    console.log( err )
})

//Server error
server.on( 'error', function( err ) {
    console.log( err )
})
