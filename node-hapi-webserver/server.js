const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 8080,
    host: 'localhost',
  });

  server.route(routes);

  await server.start();
  console.log(`Server mlaku nang ${server.info.uri}`);
}

init();