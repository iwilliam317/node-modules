const app = require('./server');

const expressSession = require('express-session');

app.use(expressSession({
  secret: 'mysecret',
  resave: false,
  saveUninitialized: true
}));

app.get('/session/:name', (request, response) => {
  const name = request.params.name;

  if(name!==undefined && name==='william'){
    request.session.authenticated = true;
  }
  else {
    request.session.authenticated = false;
  }
  response.send(request.session.authenticated);
});

