const common = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: { directory: './data/migrations' },
  seeds: { directory: './data/seeds' },
}

module.exports = {

  development: {
    ...common,
    connection: {
      filename: './data/garage.db3'
    }
  },
  production: {
    ...common,
    connection: {
      filename: './data/garageProduction.db3'
    }
  },
};