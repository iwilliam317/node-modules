const express = require('express');

const app = express();

app.listen(3000);

app.use('/', (request, response) => {
  response.send('Server up with express')
});