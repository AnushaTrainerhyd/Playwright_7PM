import {test, expect} from '@playwright/test'

test("handle table with div tags", async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", {waitUntil:"load"});
   
    //  login Functionality
    await page.locator('[name="username"]').fill('Admin');
    await page.locator('[name="password"]').fill('admin123');
    await page.locator('[type="submit"]').click()

    await page.waitForTimeout(5000);
    
    // click on PIM
    await page.getByText('PIM').click();

    await page.waitForTimeout(5000);

    // table Operatons
    const tablebody = page.locator('div.oxd-table-body');
    const row = tablebody.locator('.oxd-table-card');
    console.log("the number rows", await row.count());

    // first row record capture
    const cell = row.locator('.oxd-table-cell');
    // console.log(await cell.allTextContents());
    
    console.log(await cell.nth(1).allInnerTexts());

    // click on checkbox
    const check = cell.locator('.oxd-checkbox-input');
    await check.nth(1).click();
    await page.waitForTimeout(5000);
});