// tests/dbtest.spec.js
const { test, expect } = require('@playwright/test');
const { createConnection } = require('../db/connection');

test('Read users from MySQL database', async () => {
  const conn = await createConnection();

  const [rows] = await conn.execute('SELECT * FROM users');
  console.log(rows); // prints results in terminal

  expect(rows.length).toBeGreaterThan(0);
  await conn.end();
});
