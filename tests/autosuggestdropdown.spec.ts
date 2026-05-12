import {test, expect} from "@playwright/test"

/* test("myntra search auto populated drodown",async({page})=>{
    await page.goto("https://www.myntra.com/", {waitUntil:"load"});
        await page.waitForTimeout(5000);    
    const search = await page.getByPlaceholder('Search for products, brands and more');
    await search.click();
    await search.fill("kids", {delay:200});
    await page.waitForTimeout(5000);
    const list = await page.locator(".desktop-autoSuggest ul li").allTextContents();
    console.log("the search list item",list)


}) */

// google search
test("google search auto populated drodown",async({page})=>{
    await page.goto("https://www.google.com/", {waitUntil:"load"});
   
    const search = await page.locator('[name="q"]');
    await search.fill("word to pdf");
    
    await page.waitForTimeout(5000);

    // get the search result option
    const seachlist = await page.getByRole('option')
    const list = seachlist.allTextContents();
    console.log(list);

    console.log(await seachlist.nth(3).innerText());
    console.log(await seachlist.nth(3).textContent());

    const cnt = await seachlist.count();
    for (let i =0; i<cnt; i++){
        console.log(await seachlist.nth(i).innerText());
    }

    for (let i =0; i<cnt; i++){
        const input = await seachlist.nth(i).innerText();
        if(input == 'word to pdf converter free'){
            await seachlist.nth(i).click();
            break;
        }
    }
})
