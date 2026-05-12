// Playwrghit Auto-Retry assertions:
import {test, expect} from "@playwright/test"

test("Auto Retry Assertions", async ({page})=>{
    await page.goto("https://demo.nopcommerce.com/");

    const title = await page.title();
    console.log(title);

    // auto Retry assertions
    await expect(page).toHaveTitle("nopCommerce demo store. Home page title");
    await expect(page).toHaveURL("https://demo.nopcommerce.com/");

    await page.getByRole("link", {name: 
        "Register"});

    await expect(page.getByRole("link", 
        {name: "Register"})).toBeVisible();

    await expect(page.getByRole("link", 
        {name: "Register"})).toBeAttached();

    await expect(page.getByRole("link", 
        {name: "Register"})).toContainText("Register");

        await expect(page.getByRole("link", 
        {name: "Register"})).toBeEnabled();
        
        await expect(page.getByRole("link", 
        {name: "Register"})).not.toBeFocused();
        
        await expect(page.getByRole("link", 
        {name: "Register"})).not.toBeHidden();
         












    await expect(page.getByRole("link", 
        {name: "Register"})).toHaveAttribute(
            'class', 'ico-register'
        )

    await expect(page.getByRole("link", 
        {name: "Register"})).toHaveClass("ico-register");

    
    await expect(page.getByRole("link", 
        {name: "Register"})).toHaveCount(1);





    

    
})