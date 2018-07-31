const fs = require('fs');
const path = require('path');

fs.appendFile(path.join(__dirname, 'fs', 'mynewfile1.txt'), 'Hello content!',  err => {
  if (err) throw err;
  console.log('Saved!');
});