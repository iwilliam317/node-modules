const fs = require('fs');

const csv = require('csv-parser');

fs.createReadStream('./files/names.csv')
  .pipe(csv())
  .on('data', function(data) {
    console.log('Name: %s Age: %s', data.NAME, data.AGE);
  });
