const express = require('express');
const http = require('http');
const ioServer = require('socket.io');
const routes = require('./app/routes');
const bodyParser = require('body-parser');
const socket = require('./app/helpers/socket-io');

const app = express();
const server = http.createServer(app);

app.use(express.static('./public/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './app/views');

socket.run(server);

routes(app);

server.listen(8080);
