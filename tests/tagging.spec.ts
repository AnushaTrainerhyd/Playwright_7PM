import { test, expect, Page, chromium} from '@playwright/test';
/* tagging in Playwright
@smoke, @snaity, @regression


test("test1 @smoke", ()=>{
    console.log("this is Test1")
})

test("test2 @smoke @regression", ()=>{
    console.log("this is Test2")
})
*/

test.describe.configure({mode:"serial"});

test("test1",{tag:'@sanity'},async({page})=>{
    await page.goto('https://www.amazon.in/');
    console.log("this is Test1");
    await page.waitForTimeout(2000);
})

test("test2",{tag:['@smoke', '@regression']} ,async({page})=>{
    await page.goto('https://www.amazon.in/');
    console.log("this is Test2")
    await page.waitForTimeout(2000);
})

test("Test3",{tag:['@smoke', '@regression']}, async({page})=>{
    await page.goto('https://www.myntra.com/');
    console.log("this is test3");
    await page.waitForTimeout(2000);
})

test("test4",{tag:['@smoke', '@Sanity']}, async({page})=>{
    await page.goto('https://www.myntra.com/');
    console.log("this is test4");
    await page.waitForTimeout(2000);
})

test("test 5",{tag:['@sanity', '@regression']}, async({page})=>{
    await page.goto('https://now.hdfc.bank.in/retail-app/');
    console.log("this is test 5");
    await page.waitForTimeout(2000);
})

test("test6",{tag:'@Smoke'}, async({page})=>{
    await page.goto('https://now.hdfc.bank.in/retail-app/');
    test.slow();
    console.log("this is test6");
    await page.waitForTimeout(2000);
})