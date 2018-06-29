const io = require('socket.io');

module.exports = {
  run(server) {
    const sockets = new io(server);
    const ioNsp = sockets.of('/chat'); // namespace

    ioNsp.on('connection', (socket) => {
      socket.on('join', (room) => {
        socket.join(room);
      });

      socket.on('message', (msg, room) => {
        ioNsp.in(room).emit('message', msg);
      });

      socket.on('new-message', (msg) => {
        sockets.of('/panel').emit('new-message', msg);
      })
    });
  }
};
