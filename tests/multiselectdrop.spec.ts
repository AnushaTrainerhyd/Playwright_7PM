import {test, expect} from '@playwright/test'
/*
test("multi select drodowns", async ({page})=>{
    await page.goto("https://obstaclecourse.tricentis.com/Obstacles/94441/retry");

    // select by name
    await page.locator("#multiselect").selectOption('Functional testing');
    // await page.locator("#multiselect").selectOption('GUI testing');
    await page.locator("#multiselect").selectOption('End2End testing');

    // select by value attribute

    //  select by label
    await page.locator("#multiselect").selectOption({label:'GUI testing'});

    // select by index
    await page.locator("#multiselect").selectOption({index:2});
    
});
*/

test("multidropdown count", async({page})=>{
    await page.goto("https://obstaclecourse.tricentis.com/Obstacles/94441/retry");
    // const mdrop = await page.locator("#multiselect").allTextContents();

    const mdrop = await page.locator("#multiselect>option").allTextContents();
    console.log(mdrop);

    // verify the list item
    expect(mdrop).toContain('End2End testing');

    // get the count
    const count = await page.locator("#multiselect>option").count();
    console.log("the count of multi selct dropdown", count);
})