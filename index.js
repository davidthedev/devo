const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const routes = require('./app/routes');

app.use(express.static('public'))

routes(app);

io.on('connection', function (socket) {
  socket.on('chat message', function (msg) {
    io.emit('chat message', msg);
  });
});

server.listen(8080);
