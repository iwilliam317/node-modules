const express = require('express');

const app = express();

app.listen(3000, () => console.log('Server up!'));

app.use('/', (request, response) => response.send('Hello World!'));

module.exports = app;