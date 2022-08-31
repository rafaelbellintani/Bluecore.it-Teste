require('dotenv').config()

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: "./src/database/db/bluecore.sqlite"
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    directory: './src/database/migrations',
    tableName: 'migrations'
  },
  seeds: {
    directory: './src/database/seeds'
  },
  useNullAsDefault: true
}
