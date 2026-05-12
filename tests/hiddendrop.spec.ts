import {test, expect, Locator} from "@playwright/test"

test("Ornage HRM Hidden Dropdown",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", {waitUntil:"load"});
   
    //  login Functionality
    await page.locator('[name="username"]').fill('Admin');
    await page.locator('[name="password"]').fill('admin123');
    await page.locator('[type="submit"]').click()
await page.waitForTimeout(5000);
    // click on PIM
    await page.getByText('PIM').click();

    /* // click on dropdown icon
    await page.locator('form i').first().click();

    // const label = await page.getByLabel('Employment Status')
    // await label.click();

    // await page.getByRole('combobox', { name: 'Employment Status' }).click();

    // print all list items
    const emp:Locator= await page.getByRole('option');
    const employ = await emp.allTextContents();
    console.log(employ);

    // get the count of list item
    console.log(await emp.count());
    */
    
    // table Operations
    const tablerows = page.locator('div.oxd-table-body.oxd-table-body');
    const rowcnt = tablerows.locator('.oxd-table-card');

    await page.waitForTimeout(5000);
    await rowcnt.first().scrollIntoViewIfNeeded();
    
    for (let i = 0; i < 5; i++) {
  await page.mouse.wheel(0, 400);
    }

    await page.waitForTimeout(5000);
    console.log('the number of rows in tables', await rowcnt.count());

    const checkbox = rowcnt.locator('.oxd-checkbox-input');
    // await checkbox.first().click();
    await checkbox.nth(2).click();
    
    // await page.waitForTimeout(4000);

    // get teh entire row text
    // const name = await rowcnt.nth(5).textContent();
    const name = await rowcnt.nth(1).innerText();
    console.log("the name is ", name);

    // get the cell value
    const cell = rowcnt.locator('.oxd-table-cell');
    await cell.innerText();

});
