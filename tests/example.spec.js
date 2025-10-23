// tests/example.spec.js
const { test, expect } = require('@playwright/test');

test('Open example.com and check title', async ({ page }) => {
  // Go to a website
  await page.goto('https://example.com');

  // Expect the page title to contain "Example Domain"
  await expect(page).toHaveTitle(/Example Domain/);
});
