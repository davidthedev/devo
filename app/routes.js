const path = require('path');

module.exports = (app) => {

  app.get('/', (req, res) => {
    res.render('login');
  });

  app.post('/', (req, res) => {
    // TODO
    // save req.body params (name, email, query?) to db
    // on succcess, send redirect url

    const chatId = Math.floor(Math.random() * Math.floor(1000));
    res.status(200).json({ urlSegment: '/join/' + chatId });

    // TODO (failed response)
    // res.status(500).json({ msg: 'failed' });
  });

  app.get('/chat', (req, res) => {
    res.render('chat', { chatRoom: 'somesock' });
  });

  app.get('/chats', (req, res) => {
    const chats = [];

    chats.push('/join/somesock');
    chats.push('/join/somesock2');

    res.render('chats', { chats: chats });
  });

  // app.post('/chat', (req, res) => {

  // });

  app.get('/join/:roomId', (req, res) => {
    const roomId = req.params.roomId;
    res.render('chat', { chatRoom: roomId });
  });
};
