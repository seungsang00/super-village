const server = require('express')()
const cors = require('cors')

const ip = 'localhost'

const user = {};

const defaultCorsOptions = {
  origin: '*',
  methods: ['PUT','POST','GET','OPTIONS'],
  allowedHeaders:['Content-Type', 'Authorization'],
  maxAge: 1000
}

const socket = require('socket.io')(server, defaultCorsOptions)

socket.on('connection', (client) => {
  client.on('message', (message) => { // 메시지
    socket.emit('message', message)
  })

  client.on('login', (client) => {
    user[client.name] = {
      x: client.x,
      y: client.y
    }
    socket.emit('checkUser', user)
  })
})

server.use('/', cors(defaultCorsOptions))

server.listen( 3000, ip,  () => {
  console.log('on Server')
})
