const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const db = require('./models');
const nunjucks = require('nunjucks');
const app = express();

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '/public')));
app.use('/bootstrap', express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));
app.use('/jquery', express.static(path.join(__dirname, '/node_modules/jquery/dist')));

app.use('/', routes);
app.use((err, req, res, next) => {
  console.error(err.message);
  res.render('error');
});

db.sync()
  .then(() => app.listen(3000, () => console.log('Listening to port 3000!')))
  .catch(console.error.bind(console));
