const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.urlencoded({extended: true}));

app.use(expressValidator());

app.listen(3000, () => console.log('Server up!'));

app.get('/', (request, response) => response.send('Hello World!'));

module.exports = app;