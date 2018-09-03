const app = require('./server');

const multer = require('multer');

var upload = multer({ dest: 'uploads/' }).single('avatar');

app.get('/multer', (request, response, next) => {
  response.render('multer');
});

app.post('/profile', (request, response, next) => {
  upload(request, response, error => {
    if (error) throw error;

    response.send('Uploaded!!');
  })
})