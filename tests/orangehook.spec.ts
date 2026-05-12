import { test, expect, Page, chromium} from '@playwright/test';

let page;

// test.beforeAll("url", async()=>{
//     const browser = await chromium.launch();
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
// });

test.beforeEach('Login', async ({page}) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
});

test.afterEach("logout", async({page})=>{
  await page.getByRole('banner').getByRole('img', { name: 'profile picture' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();

})

// test.afterAll("close", async({page})=>{
//     await page.close();
// });

test("admin", async({page})=>{
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
  await page.getByRole('option', { name: 'Admin' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('.orangehrm-container').click();
  await page.getByText('Tom min').nth(1).click();
  await expect(page.getByRole('table')).toContainText('Tom min');
  await expect(page.getByText('Tom min').nth(1)).toBeVisible();
  await expect(page.getByRole('button').filter({ hasText: /^$/ }).nth(4)).toBeVisible();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(4).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('Tom Lorry spic');
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('Tom Lorry ');
  await page.getByText('Tom Lorry min').click();
});

test("PIM", async({page})=>{
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Anusha');
  await page.getByRole('textbox', { name: 'Middle Name' }).click();
  await page.getByRole('textbox', { name: 'Middle Name' }).fill('Playwright');
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Class');
  await page.getByRole('textbox').nth(4).click();
  await page.locator('.oxd-switch-input').click();
  await page.locator('.oxd-switch-input').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/407');
})