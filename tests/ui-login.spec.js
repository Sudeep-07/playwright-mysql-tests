const { test, expect } = require('@playwright/test');
const mysql = require('mysql2/promise');
const path = require('path');

async function getUserCountByName(name) {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '3007', // use your MySQL password
    database: 'testdb',
  });
  const [rows] = await connection.execute(
    'SELECT COUNT(*) AS count FROM users WHERE name = ?',
    [name]
  );
  await connection.end();
  return rows[0].count;
}

test('login page works and user exists in DB', async ({ page }) => {
  const loginFile = `file://${path.resolve('./login.html')}`;
  await page.goto(loginFile);

  // Fill the login form (simulate Alice logging in)
  await page.fill('input[name="username"]', 'Alice');
  await page.fill('input[name="password"]', 'password123');

  await Promise.all([
    page.waitForNavigation(),
    page.click('button[type="submit"]'),
  ]);

  // Verify UI redirect
  await expect(page.url()).toContain('dashboard.html');

  // Verify DB entry for Alice
  const count = await getUserCountByName('Alice');
  console.log('User count for Alice:', count);
  expect(count).toBeGreaterThan(0);
});
