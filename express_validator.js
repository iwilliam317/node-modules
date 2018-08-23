const app = require('./server');
const expressValidator = require('express-validator');

app.get('/form', (request, response) => {
  response.render('form');
});

app.post('/save', (request, response) => {
  response.send('asdiasjdiask');
})

