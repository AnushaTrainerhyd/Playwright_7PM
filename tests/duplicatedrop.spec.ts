import {test, expect} from '@playwright/test'

test("verify multidropdown sorting order", async({page})=>{
    await page.goto("file:///C:/Users/Anusha/Downloads/banking_interface.html");

    const mdrop = await page.locator("#accountType>option").allTextContents();
    console.log(mdrop);  // array

    //remove duplicates, SET Class, call - new
    const cleandropdown = new Set(mdrop);
    console.log(cleandropdown);  // set data return

    //3 dots 
    const cleandropdown1 = [...new Set(mdrop)];
    console.log(cleandropdown1);  // return array
})