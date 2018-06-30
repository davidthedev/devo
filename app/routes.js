const path = require('path');

module.exports = (app) => {

  /*
   * Form / login page
   */
  app.get('/', (req, res) => {
    res.render('login');
  });

  /*
   * Process form data and respond accordingly
   */
  app.post('/', (req, res) => {
    // TODO
    // save req.body params (name, email, query?) to db
    // and get the saved id to use a chatId

    const chatId = Math.floor(Math.random() * Math.floor(1000));
    res.status(200).json({ roomId: chatId, urlSegment: '/join/' + chatId });

    // TODO (failed response)
    // res.status(500).json({ msg: 'failed' });
  });

  /*
   * Get all current chats
   */
  app.get('/chats', (req, res) => {
    const chats = [];

    // get all active form db

    res.render('chats', { chats: chats });
  });

  app.get('/join/:roomId', (req, res) => {
    const roomId = req.params.roomId;
    res.render('chat', { chatRoom: roomId });
  });

  app.get('/messages/:roomId', (req, res) => {
    const roomId = req.params.roomId;
    res.render('messages', { chatRoom: roomId });
  });
};
