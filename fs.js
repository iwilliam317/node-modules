const fs = require('fs');
const path = require('path');

// appendFile()
// Create a new file using the appendFile() method
fs.appendFile(path.join(__dirname, 'fs', 'mynewfile1.txt'), 'Hello content!',  err => {
  if (err) throw err;
  console.log('Saved!');
});

fs.writeFile(path.join(__dirname, 'fs', 'mynewfile1.txt'), 'Replacing my text', err => {
  if (err) throw err;
  console.log('Replaced!');
});

//unlink()
// method deletes the specified file
// fs.unlink(path.join(__dirname, 'fs', 'mynewfile1.txt'), function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// });