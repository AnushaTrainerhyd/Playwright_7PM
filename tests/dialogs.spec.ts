/* 
alert(), confirm(), prompt() dialogs
By default, dialogs are auto-dismissed by Playwright, so you don't have to handle them. However, you can register a dialog handler before the action that triggers the dialog to either dialog.accept() or dialog.dismiss() it.
*/
import{test, expect} from '@playwright/test'

test("handle Dialog boxes", async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", {waitUntil:"load"});
   
    //  login Functionality
    await page.locator('[name="username"]').fill('Admin');
    await page.locator('[name="password"]').fill('admin123');
    await page.locator('[type="submit"]').click();

    page.on('dialog', dialog => dialog.accept());

    await page.waitForTimeout(5000);
});
    