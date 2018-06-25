const path = require('path');

module.exports = (app, sockets) => {
  const ioNsp = sockets.of('/chat'); // namespace

  app.get('/', (req, res) => {
    res.render('login');
  });

  app.post('/', (req, res) => {
    // TODO
    // save req.body params (name, email, query?) to db
    // on succcess, send redirect url
    res.status(200).json({ urlSegment: '/chat' });

    // TODO (failed response)
    // res.status(500).json({ msg: 'failed' });
  });

  app.get('/chat', (req, res) => {

    ioNsp.on('connection', (socket) => {
      socket.on('join', (room) => {
        socket.join('somesock');
      });

      socket.on('message', (msg) => {
        socket.emit('message', msg);
      });
    });

    res.render('chat', { chatRoom: 'somesock' });
  });

  app.post('/chat', (req, res) => {

  });

  app.get('/join', (req, res) => {
    const ioNsp = sockets.of('/chat');

    ioNsp.on('connection', (socket) => {
      socket.on('join', (room) => {
        socket.join('somesock2');
      });

      socket.on('message', (msg) => {
        socket.emit('message', msg);
      });
    });

    res.render('chat', { chatRoom: 'somesock2' });
  });
};
