import {test, expect} from '@playwright/test';
import fs from 'fs';

// read data from JSON:
    const jsonpath = "testdata/jsondata.json"
    const data:any = JSON.parse(fs.readFileSync(jsonpath,'utf-8'));

for(const {email, password, status} of data){

    test(`login functionality with ${email}`, async({page})=>{
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill(email);
  await page.getByRole('textbox', { name: 'Email:' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password:' }).fill(password);
  await page.getByRole('button', { name: 'Log in' }).click();

  if(status.toLowerCase() === 'valid') {
  await expect(page.getByRole('link', { name: 'Qicon@gmail.com' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  } else{
  await expect(page.getByText('Login was unsuccessful. Please correct the errors and try again. The')).toBeVisible();
  }
    });

}