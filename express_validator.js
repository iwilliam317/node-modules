const app = require('./server');

app.get('/form', (request, response) => {
  response.render('form');
});

app.post('/save', (request, response) => {
    request.assert('name', 'Name can\'t be blank!').notEmpty();
    let error = request.validationErrors();
    console.log(error)
    if (error){      
      return response.render('form', { erros: erros})
    }
    

})

