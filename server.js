const express = require('express');

const app = express();

app.set('view_engine', 'ejs');
app.set('views', './views');

app.listen(3000, () => console.log('Server up!'));

app.get('/', (request, response) => response.send('Hello World!'));

module.exports = app;