const server = require('express')()
const cors = require('cors')

const ip = 'localhost'

let users = [];

const defaultCorsOptions = {
  origin: '*',
  methods: ['PUT','POST','GET','OPTIONS'],
  allowedHeaders:['Content-Type', 'Authorization'],
  maxAge: 1000
}

const socket = require('socket.io')(server, cors(defaultCorsOptions))

socket.on('connection', (client) => {

  client.on('message', (message) => { // 메시지
    socket.emit('message', message)
  })

  client.on('login', (user) => { // 로그인
    if (!user) return ;
    users.push(user)
    socket.emit('checkUser', users)
  })

  client.on('moveUser', (user) => { // 사용자 이동 이벤트
    if (!user) return;
    const leftUsers= users.filter(u => u.name !== user.name)
    users = [
      ...leftUsers,
      user
    ]
    socket.emit('checkUser', users)
  })
})

server.use('/', cors(defaultCorsOptions))

server.listen(433, ip,  () => {
  console.log('on Server')
})
