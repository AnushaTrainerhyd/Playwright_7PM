import{test, expect} from '@playwright/test'

test("auto retry assertions", async({page})=>{
    await page.goto("https://demo.nopcommerce.com/");
    const title = await page.title();
    console.log("types of the variable", typeof(title));

    // non retry assertions
    expect(title).toContain("nopCommerce demo store. Home page title");

    // auto retry assertions
    await expect(page).toHaveTitle("nopCommerce demo store. Home page title");
    await expect(page).toHaveURL("https://demo.nopcommerce.com/");

    page.getByText("Welcome to our store");
    await expect(page.getByText("Welcome to our store")).toBeVisible();
    await expect(page.getByText("Welcome to our store")).toBeAttached();

    // hard assertions
    await expect(page.getByText("Welcome to our store")).toBeChecked();  //fail
    
    // soft assertions
    await expect.soft(page.getByText("Welcome to our store")).toBeChecked(); //fail

    const register = await page.locator("//*[@class='ico-register']");
    await expect(register).toBeVisible();

});

// hard aseertions and Soft assertions: