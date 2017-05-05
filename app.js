const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const db = require('models');
const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '/public')));
app.use('/', routes);
app.use((err, res, req, next) => res.status(err.status).send(err.message));

db.sync()
  .then(() => app.listen(3000, () => console.log('Listening to port 3000!')))
  .catch(console.error.bind(console));
