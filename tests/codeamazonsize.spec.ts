import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 1000,
    width: 1000
  }
});

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/',{timeout: 6000});
  
  const timestamp = Date.now();
  await page.getByRole('link', { name: 'Bestsellers' }).click();
  await page.screenshot({path:'tests/'+'screenshot/'+'bestseller'+timestamp+'.png', fullPage: true});


  await page.getByRole('link', { name: 'Movers and Shakers' }).screenshot({path:'tests/screenshot/movers'+'timestamp'+'.png'});
  await page.getByRole('link', { name: 'Movers and Shakers' }).click();
  await page.getByText('Amazon Movers & ShakersOur').click();
  await expect(page.getByRole('heading', { name: 'Amazon Movers & Shakers' })).toBeVisible();
});