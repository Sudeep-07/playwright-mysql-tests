// filepath: tests/saucedemo-login.spec.js
const { test, expect } = require('@playwright/test');

test('saucedemo login redirects to inventory page', async ({ page }) => {
  // Go to login page
  await page.goto('https://www.saucedemo.com/');

  // Fill username and password fields
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  // Click login button and wait for navigation
  await Promise.all([
    page.waitForNavigation(),
    page.click('#login-button'),
  ]);

  // Check if redirected to the inventory page
  await expect(page).toHaveURL(/inventory\.html/);
});


 // or if you want to wait till you see the inventory page 


//  // filepath: tests/saucedemo-login.spec.js
// const { test, expect } = require('@playwright/test');

// test('saucedemo login redirects to inventory page', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');

//   await page.fill('#user-name', 'standard_user');
//   await page.fill('#password', 'secret_sauce');

//   await Promise.all([
//     page.waitForNavigation(),
//     page.click('#login-button'),
//   ]);

//   await expect(page).toHaveURL(/inventory\.html/);

//   // 👇 This line keeps the browser open for inspection
//   await page.pause();
// });


// or if you want to have screen shots 
