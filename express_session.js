const app = require('server');

const expressSession = require('express-session');

app.use(expressSession({
  secret: 'mysecret',
  resave: false,
  saveUninitialized: true
}));

