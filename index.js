const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const routes = require('./app/routes');

io.on('connection', function (socket) {
  console.log('a user connected');
});

app.use(express.static('public'))

routes(app);

server.listen(8080);
