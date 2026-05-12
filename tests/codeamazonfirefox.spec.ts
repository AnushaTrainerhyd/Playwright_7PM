import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 15'],
});

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('Kids');
  await page.getByRole('button', { name: 'kids toys for 2 - 5 years boy' }).click();
  await page.getByRole('button', { name: 'Popular' }).click();
  await page.getByRole('button', { name: 'close' }).click();
});