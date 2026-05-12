import {test,expect, chromium} from '@playwright/test'

test('popup window handler', async ({browser})=>{
    // const Browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://obstaclecourse.tricentis.com/Obstacles/51130/retry');

    // click on click me button
    const clickme = page.locator('.btn.theme-btn-color');
    await clickme.click();

    await page.waitForTimeout(5000);

    const pages = context.pages();
    console.log("the number of pages", pages.length);

    console.log('the first page', pages[0].url());
    console.log('the first page', pages[1].url());
    await pages[1].close();

});