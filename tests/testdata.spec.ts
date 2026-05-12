// Data Driven test the particular functionality with differnt combinations data

import {test, expect} from '@playwright/test'

// laptops, mobiles, cloths, kidswear

const data:string[] = ['laptops', 'mobiles', 'TVs', 'kidswear']

test.describe("search in amazon portal",()=>{
// for loops
for(const itemname of data) {
    test(`amazon search functionality ${itemname}`, async({page})=>{
    await page.goto('https://www.amazon.in/');
    await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
    await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill(itemname);
    await page.getByRole('button', { name: 'Go', exact: true }).click();
    });
}
});

const login:string[][] = [["qicon@gmail.com","Next@123","valid"],
                            ["abc@gmail.com", "Next@123", "invalid"],
                            ["xyz@gmail.com", "abc123", "invalid"]]

for(const [email, password, status] of login){

// test.describe("login data",()=>{});
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


// for each function:
test.describe("search in amazon portal",()=>{
// for loops
data.forEach((item)=>{
    test(`amazon search ${item}`, async({page})=>{
    await page.goto('https://www.amazon.in/');
    await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
    await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill(item);
    await page.getByRole('button', { name: 'Go', exact: true }).click();
    });
});
});