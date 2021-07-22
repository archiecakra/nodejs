const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Homepage';
    },
  },
  {
    method: '*',
    path: '/',
    handler: (request, h) => {
      return 'Halaman tidak dapat diakses dengan method tersebut';
    },
  },
  {
    method: 'GET',
    path: '/about',
    handler: (request, h) => {
      return 'About page';
    },
  },
  {
    method: '*',
    path: '/about',
    handler: (request, h) => {
      return 'Halaman tidak dapat diakses dengan method tersebut';
    },
  },
  {
    method: 'GET',
    path: '/hello/{name?}',
    handler: (request, h) => {
      const { name = "Stranger" } = request.params;
      const { lang } = request.query;

      if (lang == 'id') {
        return `Halooo, selamat datang ${name}`;
      } else {
        return `Hellooo, welcome ${name}`;
      }

    },
  },
  {
    method: 'POST',
    path: '/login',
    handler: (request, h) => {
      const {username, password} = request.payload;

      if (password == 123) {
        return `Welcome ${username}`;
      } else {
        return 'Unauthorized';
      }
    }
  },
  {
    method: '*',
    path: '/{any*}',
    handler: (request, h) => {
      return 'Halaman tidak ditemukan';
    },
  },
];

module.exports = routes;