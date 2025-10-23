// db/connection.js
const mysql = require('mysql2/promise');

async function createConnection() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '3007', // replace if you chose another password
    database: 'testdb',
  });
  return connection;
}

module.exports = { createConnection };
