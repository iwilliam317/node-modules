const app = require('./server');

const expressSession = require('express-session');

app.use(expressSession({
  secret: 'mysecret',
  resave: false,
  saveUninitialized: true
}));

app.get('/session', (request, response) => {
  request.session.user = 'william';

  response.send(request.session.user);
});

