const app = require('./server');

app.get('/form', (request, response) => {
  response.render('form');
});

app.post('/save', (request, response) => {
  request.assert('name', "Name can't be blank!").notEmpty();
  let errors = request.validationErrors();
  console.log(errors);
  if (errors) {
    return response.render('form', { errors: errors });
  }
});
