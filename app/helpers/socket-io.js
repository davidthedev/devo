const io = require('socket.io');
const socketConfig = require('../config/socket');

module.exports = {
  connect(server) {
    const sockets = new io(server);
    const ioNsp = sockets.of('/chat'); // socket namespace

    ioNsp.on('connection', (socket) => {
      /*
       * Join a room, inform the operators
       */
      socket.on(socketConfig.joinAsUser, (params, cb) => {
        // join room
        socket.join(params.roomId);
        // inform operator that a new user just joined an online chat
        sockets.of('/panel').emit(socketConfig.joinedAsUser, params.roomId);
        // send confirmation back to user
        cb(socketConfig.pendingOpMsg);
      });

      /*
       * Join a room, as an operator
       */
      socket.on(socketConfig.joinAsOp, params => {
        socket.join(params.roomId);

        const joinedAsOpMsg = socketConfig.joinedAsOpMsg.replace('{op_name}', params.opName);

        ioNsp.in(params.roomId).emit(socketConfig.joinedAsOp, joinedAsOpMsg);
      });

      /*
       * Emit received message
       */
      socket.on(socketConfig.message, (params) => {
        ioNsp.in(params.roomId).emit(socketConfig.message, params.msg);
      });

      /*
       * Inform operator that a new user joined support chat
       */
      socket.on('socketConfig.joinedAsUser', (room) => {
        sockets.of('/panel').emit('socketConfig.joinedAsUser', room);
        ioNsp.in(room).emit('')
      })
    });
  }
};
