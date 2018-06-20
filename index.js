const express = require('express');
const routes = require('./app/routes');

const app = express();

routes(app);

app.listen(8080);
