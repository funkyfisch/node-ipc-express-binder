var net = require('net')

// var unixServer = net.createServer((socket) => {
//     console.log(socket)
//     socket.write('Echo server\n')
//     socket.pipe(socket)

// })

// unixServer.listen('/home/node/sockets/example')

let client = net.createConnection('/home/node/sockets/unix-socket')

client.on('connect', () => {
    console.log('Client connected!')
    setInterval(() => {
        client.write('Hello server\n')
    }, 2000)
})

client.on('data', (data) => {
    console.log('Received' + data)
})

let shutdown = () => {
    // unixServer.close()
    process.exit()
}

process.on('SIGINT', shutdown)