import {test, expect} from '@playwright/test'

test.beforeEach('Sample url andautomobile', async({page})=>{
  await page.goto('https://sampleapp.tricentis.com/101/index.php');
  await page.getByRole('link', { name: 'Automobile', exact: true }).click();
  await expect(page.getByText('Automobile Insurance', { exact: true })).toBeVisible();
});

// test.beforeAll('Sample url andautomobile', async({browser})=>{
//     const context = await browser.newContext();
//     const page = await context.newPage();

//   await page.goto('https://sampleapp.tricentis.com/101/index.php');
//   await page.getByRole('link', { name: 'Automobile', exact: true }).click();
//   await expect(page.getByText('Automobile Insurance', { exact: true })).toBeVisible();
//   await page.waitForTimeout(5000);
// });

test(' @sanity Enter Vehicle data', async({page})=>{
await  page.goto('https://sampleapp.tricentis.com/101/index.php');
  await page.getByRole('link', { name: 'Automobile', exact: true }).click();
  await expect(page.getByText('Automobile Insurance', { exact: true })).toBeVisible();
  await page.waitForTimeout(5000);
  await page.locator('#make').selectOption('Renault');
  await page.locator('#engineperformance').click();
  await page.locator('#engineperformance').fill('234');
  await page.getByRole('textbox', { name: 'MM/DD/YYYY' }).click();
  await page.getByTitle('Open Date of Manufacture').click();
  await page.getByRole('link', { name: '6', exact: true }).click();
  await page.locator('#numberofseats').selectOption('4');
  await page.locator('#fuel').selectOption('Electric Power');
  await page.locator('#listprice').click();
  await page.locator('#listprice').fill('12345');
  await page.locator('#licenseplatenumber').click();
  await page.locator('#licenseplatenumber').fill('TS12ES1234');
  await page.locator('#annualmileage').click();
  await page.locator('#annualmileage').fill('23467');
  await page.getByRole('button', { name: 'Next »' }).click();
  await page.waitForTimeout(2000);
});

/*//   Enter Insurent Data
await page.getByRole('link', { name: 'Enter Insurant Data' }).click();
  await page.locator('#firstname').click();
  await page.locator('#firstname').fill('Ansuha');
  await page.locator('#lastname').click();
  await page.locator('#lastname').fill('Trainer');
  await page.getByRole('textbox', { name: 'MM/DD/YYYY' }).click();
  await page.getByTitle('Open Date of Birth Calender').click();
  await page.getByTitle('Prev').click();
  await page.getByText('2026').click();
  await page.getByTitle('Prev').dblclick();
  await page.getByTitle('Prev').dblclick();
  await page.getByRole('textbox', { name: 'MM/DD/YYYY' }).click();
  await page.getByRole('textbox', { name: 'MM/DD/YYYY' }).fill('01/01/1997');
  await page.locator('label:nth-child(2) > .ideal-radio').first().click();
  await page.locator('#streetaddress').click();
  await page.locator('#streetaddress').fill('hyderabad');
  await page.locator('#country').selectOption('India');
  await page.locator('#zipcode').click();
  await page.locator('#zipcode').fill('456879');
  await page.locator('#city').click();
  await page.locator('#city').fill('Hyderabad');
  await page.locator('#occupation').selectOption('Farmer');
  await page.locator('.ideal-check').first().click();
  await page.locator('label:nth-child(2) > .ideal-check').first().click();
  await page.locator('label:nth-child(3) > .ideal-check').click();
  await page.locator('label:nth-child(3) > .ideal-check').click();
  await page.locator('label:nth-child(5) > .ideal-check').click();
  await page.locator('#website').click();
  await page.getByRole('button', { name: 'Next »' }).click();
  await page.waitForTimeout(2000);

//   Enter Product Data
await page.getByRole('link', { name: 'Enter Product Data' }).click();
  await page.getByRole('textbox', { name: 'MM/DD/YYYY' }).click();
  await page.getByTitle('Open Start Date Calender').click();
  await page.getByTitle('Next').click();
  await page.getByRole('link', { name: '18' }).click();
  await page.locator('#insurancesum').selectOption('10000000');
  await page.locator('#meritrating').selectOption('Malus 12');
  await page.locator('#damageinsurance').selectOption('No Coverage');
  await page.locator('div:nth-child(5) > .group > label > .ideal-check').first().click();
  await page.locator('div:nth-child(5) > .group > label:nth-child(2) > .ideal-check').click();
  await page.locator('#courtesycar').selectOption('No');
  await page.getByRole('button', { name: 'Next »' }).click();
  await page.waitForTimeout(2000);

//   Select Price Option
    await page.getByRole('link', { name: 'Select Price Option' }).click();
  await page.locator('th:nth-child(3) > label:nth-child(2) > .ideal-radio').click();
  await page.getByRole('button', { name: 'Next »' }).click();
  
  await page.waitForTimeout(2000);

  await page.getByRole('link', { name: 'Send Quote' }).click();
  await page.locator('#email').click();
  await page.locator('#email').fill('anusha@gmail.com');
  await page.locator('#email').press('Tab');
  await page.locator('#phone').click();
  await page.locator('#phone').fill('9876434456');
  await page.locator('#username').click();
  await page.locator('#username').fill('Anusha');
  await page.locator('#password').click();
  await page.locator('#password').click();
  await page.locator('#password').fill('Anusha@123');
  await page.locator('#confirmpassword').click();
  await page.locator('#confirmpassword').fill('Anusha@123');
  await page.locator('#Comments').click();
  await page.locator('#Comments').fill('Good Service');
  await page.getByRole('button', { name: '« Send »' }).click();
  await expect(page.getByRole('heading', { name: 'Sending e-mail success!' })).toBeVisible();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.waitForTimeout(2000);

});*/

test("Enter Insurant Data", async({page})=>{
    
  await page.getByRole('link', { name: 'Enter Insurant Data' }).click();
  await page.locator('#firstname').click();
  await page.locator('#firstname').fill('Ansuha');
  await page.locator('#lastname').click();
  await page.locator('#lastname').fill('Trainer');
  await page.getByRole('textbox', { name: 'MM/DD/YYYY' }).click();
  await page.getByTitle('Open Date of Birth Calender').click();
  await page.getByTitle('Prev').click();
  await page.getByText('2026').click();
  await page.getByTitle('Prev').dblclick();
  await page.getByTitle('Prev').dblclick();
  await page.getByRole('textbox', { name: 'MM/DD/YYYY' }).click();
  await page.getByRole('textbox', { name: 'MM/DD/YYYY' }).fill('01/01/1997');
  await page.locator('label:nth-child(2) > .ideal-radio').first().click();
  await page.locator('#streetaddress').click();
  await page.locator('#streetaddress').fill('hyderabad');
  await page.locator('#country').selectOption('India');
  await page.locator('#zipcode').click();
  await page.locator('#zipcode').fill('456879');
  await page.locator('#city').click();
  await page.locator('#city').fill('Hyderabad');
  await page.locator('#occupation').selectOption('Farmer');
  await page.locator('.ideal-check').first().click();
  await page.locator('label:nth-child(2) > .ideal-check').first().click();
  await page.locator('label:nth-child(3) > .ideal-check').click();
  await page.locator('label:nth-child(3) > .ideal-check').click();
  await page.locator('label:nth-child(5) > .ideal-check').click();
  await page.locator('#website').click();
  await page.getByRole('button', { name: 'Next »' }).click();
  await page.waitForTimeout(2000);
});

test("Enter Product Data", async({page})=>{
  await page.getByRole('link', { name: 'Enter Product Data' }).click();
  await page.getByRole('textbox', { name: 'MM/DD/YYYY' }).click();
  await page.getByTitle('Open Start Date Calender').click();
  await page.getByTitle('Next').click();
  await page.getByRole('link', { name: '18' }).click();
  await page.locator('#insurancesum').selectOption('10000000');
  await page.locator('#meritrating').selectOption('Malus 12');
  await page.locator('#damageinsurance').selectOption('No Coverage');
  await page.locator('div:nth-child(5) > .group > label > .ideal-check').first().click();
  await page.locator('div:nth-child(5) > .group > label:nth-child(2) > .ideal-check').click();
  await page.locator('#courtesycar').selectOption('No');
  await page.getByRole('button', { name: 'Next »' }).click();
  await page.waitForTimeout(2000);
  
});

test("Select Price Option", async({page})=>{
 
  await page.getByRole('link', { name: 'Select Price Option' }).click();
  await page.locator('th:nth-child(3) > label:nth-child(2) > .ideal-radio').click();
  await page.getByRole('button', { name: 'Next »' }).click();
  
  await page.waitForTimeout(2000);
});

test("Send Quote", async({page})=>{
  await page.getByRole('link', { name: 'Send Quote' }).click();
  await page.locator('#email').click();
  await page.locator('#email').fill('anusha@gmail.com');
  await page.locator('#email').press('Tab');
  await page.locator('#phone').click();
  await page.locator('#phone').fill('9876434456');
  await page.locator('#username').click();
  await page.locator('#username').fill('Anusha');
  await page.locator('#password').click();
  await page.locator('#password').click();
  await page.locator('#password').fill('Anusha@123');
  await page.locator('#confirmpassword').click();
  await page.locator('#confirmpassword').fill('Anusha@123');
  await page.locator('#Comments').click();
  await page.locator('#Comments').fill('Good Service');
  await page.getByRole('button', { name: '« Send »' }).click();
  await expect(page.getByRole('heading', { name: 'Sending e-mail success!' })).toBeVisible();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.waitForTimeout(2000);
});