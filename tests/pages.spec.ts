import{test, expect, chromium} from '@playwright/test'

/*
test('number of tabs', async({context})=>{
    const Browser = await chromium.launch();
    const page = await context.newPage();
}); 

test('number of tabs', async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
});

test('number of tabs', async({page})=>{
    page.goto("")
});*/

test('number of tabs', async()=>{
    const Browser = await chromium.launch();
    const context = await Browser.newContext();
    const mainpage = await context.newPage();

    await mainpage.goto('https://www.myntra.com',{waitUntil:'domcontentloaded'});

    // enter ponds
    const product = await mainpage.locator('.desktop-searchBar').fill('ponds');
    await mainpage.press('.desktop-searchBar', 'Enter');

    // click on Ponds
    // context.waitForEvent('page');
    // await mainpage.locator('.product-productMetaInfo').first().click();
    
    // run above two steps parellel
    const [prodpages] = await Promise.all([context.waitForEvent('page'), 
        mainpage.locator('.product-productMetaInfo').first().click()])

    // console.log("the number of tabs/ pages opened", [prodpages].length);

    // capture the number pages
    const pagenames = context.pages();
    console.log("the number of tabs/ pages opened", pagenames.length);
   
    // 1) capture page title:
    console.log(await pagenames[0].title());
    console.log(await pagenames[1].title());
    pagenames[1].close;

    await mainpage.waitForTimeout(5000);
});




