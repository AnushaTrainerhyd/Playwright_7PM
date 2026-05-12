import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.myntra.com/personal-care');
  await page.getByText('Next').click();
  await page.getByText('Next').click();
  await page.getByText('Next').click();
  await page.getByText('Next').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Nivea Women Aloe Hydration' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'ML & Above' }).click();

});