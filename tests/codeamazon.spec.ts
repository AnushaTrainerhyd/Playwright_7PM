import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('https://www.amazon.in/');
  await page.getByLabel('Select the department you').selectOption('search-alias=popular');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByLabel('Select the department you').selectOption('search-alias=todays-deals');
  await page.getByLabel('Select the department you').selectOption('search-alias=electronics');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('iphones');
  await page.goto('https://www.amazon.in/s?k=iphones&i=electronics&crid=2GWXXV66OAI3Q&sprefix=iphones%2Celectronics%2C460&ref=nb_sb_noss_2');
  await page.getByRole('link', { name: 'Apply the filter Get It by' }).click();
  await page.getByRole('link', { name: 'Apply the filter Get It in 2' }).click();
  await page.locator('#a-autoid-29-announce').click();
  await expect(page.getByRole('heading', { name: '1-24 of 322 results for "iphone"', exact: true })).toBeVisible();
});