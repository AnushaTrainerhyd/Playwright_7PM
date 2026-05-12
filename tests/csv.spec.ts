import {test, expect} from '@playwright/test';
import fs from 'fs';
import {parse} from 'csv-parse/sync';

// read data from CSV
    const csv='testdata/data.csv';
    const file = fs.readFileSync(csv, 'utf-8');
    const record:any[] = parse(file, {columns:true, skip_empty_lines:true});

const date = Date()

for(const i of record){
  test(`login csv files ${i.email}`, async({page})=>{
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill(i.email);
  await page.getByRole('textbox', { name: 'Email:' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password:' }).fill(i.password);
  await page.getByRole('button', { name: 'Log in' }).click();

  if(i.status.toLowerCase() === 'valid') {
  await expect(page.getByRole('link', { name: 'Qicon@gmail.com' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  } else{
  await expect(page.getByText('Login was unsuccessful. Please correct the errors and try again. The')).toBeVisible();
  }
    });
}