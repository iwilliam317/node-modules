const http = require('http');

http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type' : 'text/html'});
  response.end('Http server up!');
}).listen(3000);