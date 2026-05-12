import {test, expect,Locator} from '@playwright/test'

test("css locators pratice",async({page})=>{
    await page.goto("file:///C:/Users/Anusha/Downloads/banking_interface.html");

    // tag with ID(#) (Tag is Optional)
    // await page.locator("input#username").fill("anusha");
    await page.locator("#username").fill("anusha");
    // await page.locator("input#password").fill("Anu@123@123");
    await page.locator("#password").fill("Anu@123@123");

    // tag with class (.) 
    await page.locator("input.input-field").last().fill("10000"); // tag with
    // await page.locator(".btn-login").click();  // without tag

    // tag with attribute [attribute]
    await page.locator("button[name=resetButton]").click();
    // await page.locator("[name=resetButton]").click();
    await page.locator("[name='resetButton']").click();

    // tag with class&atrribute  tag.class name[attribute]
    await page.locator("input.input-field[name='username']").fill("John");
    await page.locator(".input-field[name='username']").fill("John");

    // regular expression (Starts with^, end with $, conatins *)
    const text = await page.locator(".input-field[name^='user']");
    expect(text).toBeVisible();
    await text.fill("John");
    await page.locator(".input-field[name$='name']").fill("John");


    // await page.locator(".input-field[name*='username']");
    await page.locator("[name*='etB']").click();

    // Logical Operators (AND), (OR --> comma ,) (not --> :not)
    await page.locator(".input-field[name^='user'], [name^='Pass']").fill("John");
    await page.locator(".input-field[name^='user'], :not[name^='Pass']").fill("John");
    await page.locator(".input-field:not[name^='Pass']");
    await expect(page.locator(".input-field:not[name^='Pass']"))
})







