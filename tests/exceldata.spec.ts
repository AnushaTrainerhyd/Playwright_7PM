import {test, expect} from '@playwright/test';
import fs from 'fs';
// import {parse} from 'csv-parse/sync';
import * as XL from 'xlsx';

// read data from CSV
    const excelpath='testdata/xl_data.xlsx';
    const workbook = XL.readFile(excelpath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    // conver data int JSON format
    const xljson = XL.utils.sheet_to_json(worksheet) as any;


for(const i of xljson){
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