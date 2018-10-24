const Hapi = require('hapi');

const server = Hapi.server({
  host: 'localhost',
  port: '3000',
});

server.route({
  method: 'GET',
  path: '/',
  handler: (request, h) => 'Hello World from Hapi',
});

server.start();
