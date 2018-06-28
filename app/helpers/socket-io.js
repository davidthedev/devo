const ioServer = require('socket.io');

module.exports = {
  run(server) {
    const sockets = new ioServer(server);
    const ioNsp = sockets.of('/chat'); // namespace

    ioNsp.on('connection', (socket) => {
      socket.on('join', (room) => {
        socket.join(room);
      });

      socket.on('message', (msg, room) => {
        socket.to(room).emit('message', msg);
      });
    });
  }
};
