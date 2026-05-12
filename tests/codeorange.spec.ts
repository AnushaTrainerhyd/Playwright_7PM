import { test, expect } from '@playwright/test';

// test.use({trace: 'on'})
// test.use({trace:'on'})

test('test', async ({page}) => {
  // context.tracing.start({screenshots:true});
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();

  // add timestamp to creates number images
  const timestamp = Date.now();
  // await page.screenshot({path:'tests/screenshot/orange'+timestamp+'.png'});

  await page.getByRole('textbox', { name: 'Username' }).fill('Admin1');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();

  await expect(page.getByRole('link', { name: 'Admin' })).toBeVisible();
  // context.tracing.stop({path:'trace.zip'});
});