const { test, expect } = require('@playwright/test');
const db = require('../db/connection');

test('verify user Alice exists in users table', async () => {
    const connection = await db.createConnection();
    try {
        const [rows] = await connection.execute(
            'SELECT COUNT(*) AS count FROM users WHERE name = ?',
            ['Alice']
        );
        const count = Number(rows[0].count ?? Object.values(rows[0])[0]);
        expect(count).toBeGreaterThan(0);
    } finally {
        await connection.end();
    }
});
