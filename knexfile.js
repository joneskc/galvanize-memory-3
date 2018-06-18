// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/galvanize-games'

  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/test-galvanize-games'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
