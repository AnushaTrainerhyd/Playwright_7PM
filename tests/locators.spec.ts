import {test, expect, Locator} from '@playwright/test'

// test("ICIC Logo verification",async({page})=>{
//     await page.goto("https://www.icici.bank.in/business-banking");
//     const logo:Locator = page.getByAltText("header main logo");
//     await expect(logo).toBeVisible();
// });

// test("Nop logo testcase",async({page})=>{
//     await page.goto("https://demo.nopcommerce.com/");
//     // const logo:Locator = page.getByAltText("nopCommerce demo store");
//     // await expect(logo).toBeVisible();
//     // await expect(page.getByAltText("nopCommerce demo store")).toBeVisible();

//     const tex:Locator=page.getByText("Welcome to our store");
//     expect(tex).toBeVisible();

//     await page.locator("input#small-searchterms").fill("books");
//     await page.locator("input.search-box-text").fill("abc");
//     // await page.locator("button.button-1.search-box-button").click();
//     // await page.locator("input[name='q']").waitFor({ state: 'visible' });
//     await page.locator("input[name='q']").fill("Books");
//     // await page.locator("button[type=submit]").click();
//     await page.locator("input.search-box-text[name='q']").fill("computers");
// });


test("locators",async({page})=>{
    await page.goto("file:///C:/Users/Anusha/Desktop/ploc2.html");

    // getByAltText (alt -> Attribute)
    const logo:Locator = page.getByAltText("Next IT Career Logo");
    await expect(logo).toBeAttached();


    // Page.getByText();
    const text:Locator = page.getByText(/Welcome Back!/i).first();
    console.log(text);
    await expect(text).toBeVisible();

    //page.getByLabel
    await page.getByLabel("Email Address").fill("anusha@gmail.com");
    await page.getByPlaceholder("you@example.com").first().fill("abc@gmail.com");

    // getByTitle() --> It is an attribute
    const title:Locator = page.getByTitle("Open Settings")
    await expect(title).toBeVisible();

    // getByRole() --> 
    await page.getByRole('button', {name:'Submit'}).first().click();
    await page.getByRole('link', {name:'Home'}).first().click();
    await page.getByRole('textbox').first().fill("abc@gmail.com");

    // getByTestID()  --> Attribute (deveoper test)
    const id:Locator= page.getByTestId("user-name-1");
    await expect(id).toBeVisible();
});
