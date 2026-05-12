import {test, expect, chromium,Page} from '@playwright/test'

/*test("certification popups", async ({page})=>{
    // Syntax: https://username:password@the-internet.herokuapp.com/basic_auth
    await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');

    // verify congratulation message
    await expect(page.getByText('Congratulations! You must have the proper credentials')).toBeVisible();

    await page.waitForTimeout(5000);
}); */

test("certification popups", async ({browser})=>{
    // const browser = await chromium.launch();
    const context = await browser.newContext({httpCredentials:{username:'admin', password:'admin'}})
    const page = await context.newPage();

    await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');

    // verify congratulation message
    await expect(page.getByText('Congratulations! You must have the proper credentials')).toBeVisible();

    await page.waitForTimeout(5000);
});