const authSocket = require('./middleware/authSocket');
const newConnectionHandler = require('./socketHandler/newConnectionHandler');
const disconnectHandler = require('./socketHandler/disconnectHandler');
 

const registerSocketServer = (server)=>{
  const io = require('socket.io')(server,{
    cors:{
      origin:'*',
      methods:['GET','POST']
    },
  });

  io.use((socket,next)=>{
    authSocket(socket,next);
  });

  io.on('connection', (socket)=>{
    console.log('user connected')
    console.log(socket.id)

    // new connection handler
    newConnectionHandler(socket,io);

    socket.on('disconnect',()=>{
      disconnectHandler(socket);
    });
  });
};

module.exports = {
  registerSocketServer,
}