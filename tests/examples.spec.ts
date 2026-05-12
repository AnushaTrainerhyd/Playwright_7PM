import {test, expect} from '@playwright/test'

test("search books", async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");

    // goto nop comm and search books
    // await page.getByPlaceholder("Search store").fill("Books");

    // click on search button
    // await page.getByRole("button", {name:"Search"}).click();

    // enter Register details:
    await page.getByRole("link", {name:"Register"}).click();

    // await expect(page.getByText("Register")).toBeVisible();
    const title = page.getByRole("heading",{name:"Register"});
    await expect(title).toBeVisible();

    const check = await page.getByRole("radio", {name: "Male", exact: true});

    await check.check();
    // await check.click();

    await expect(check).toBeChecked();

    const checf = await page.getByRole("radio", {name: "Female", exact: true});

    await expect(checf).not.toBeChecked();

    await page.getByLabel("First name:").fill("Raju");

    await page.getByLabel("Last name:").fill("Mahesh");

    await page.getByLabel("Email:").fill("raju@gmail.com");

    await page.getByLabel("Password:", {exact: true}).fill("Raju@123@123");

    await page.getByLabel("Confirm password:").fill("Raju@123@123");

    await page.getByRole("button", {name: "Register"}).click();

});