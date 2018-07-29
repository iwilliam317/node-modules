const path = require('path');

// basename
// Returns the last part of a path
console.log(`${path.basename(__dirname)}`);

// dirname
// Current path
console.log(`${__dirname}`);

// resolve
// Resolves the specified paths into an absolute path
console.log(`${path.resolve(__dirname)}`);

// join
// Joins the specified paths into one
console.log(`${path.join('Users', 'Refsnes', 'demo_path.js')}`);