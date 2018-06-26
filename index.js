const express = require('express');
const http = require('http');
const ioServer = require('socket.io');
const routes = require('./app/routes');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);
const sockets = new ioServer(server);

app.use(express.static('./public/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './app/views');

const ioNsp = sockets.of('/chat'); // namespace

ioNsp.on('connection', (socket) => {
  socket.on('join', (room) => {
    console.log('room joined ' + room);
    socket.join(room);
  });

  socket.on('message', (msg) => {
    console.log('here chat');
    socket.emit('message', msg);
  });
});

routes(app, sockets);

server.listen(8080);
