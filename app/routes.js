const path = require('path');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.sendFile(path.resolve('public/index.html'));
  });

  app.get('/login', (req, res) => {
    res.sendFile(path.resolve('public/login.html'));
  });

  app.post('/login', (req, res) => {
    // TODO
    // save req.body params (name, email, query?) to db
    // on succcess, send redirect url
    res.status(200).json({ urlSegment: '/chat' });

    // TODO (failed response)
    // res.status(500).json({ msg: 'failed' });
  });

  app.get('/chat', (req, res) => {
    res.sendFile(path.resolve('public/index.html'));
  });
};
