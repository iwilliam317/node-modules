const request = require('request');

const options = {
  headers: { 'user-agent' : 'nodejs' },
   uri: 'https://api.github.com/users/iwilliam317/repos'
}
request(options, (err, response, body) => {
  if (err) throw err;
  // console.log(body);
  console.log(response);
});