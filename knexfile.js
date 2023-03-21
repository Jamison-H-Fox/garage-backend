// const common = {
//   client: 'sqlite3',
//   useNullAsDefault: true,
//   migrations: { directory: './data/migrations' },
//   seeds: { directory: './data/seeds' },
// }

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    migrations: { directory: './data/migrations' },
    seeds: { directory: './data/seeds' },
    connection: {
      filename: './data/garage.db3'
    }
  },
};