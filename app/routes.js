const path = require('path');

module.exports = (app, sockets) => {

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
    res.render('chat', { chatRoom: 'somesock' });
  });

  // app.post('/chat', (req, res) => {

  // });

  app.get('/join', (req, res) => {
    res.render('chat', { chatRoom: 'somesock2' });
  });
};
