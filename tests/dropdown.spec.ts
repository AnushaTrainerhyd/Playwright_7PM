import {test, expect} from '@playwright/test'

/* test("different ways to handle dropdown", async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/books");

    // select option from dropdown  by using css id =  #products-orderby
    await page.locator("#products-orderby").selectOption("Name: A to Z");

    // select option from dropdown using value attribute:
    await page.locator("#products-orderby").selectOption({value:"https://demowebshop.tricentis.com/books?orderby=6"});

    // select optionfrom drodown using lable
    await page.locator("#products-orderby").selectOption({label:"Name: A to Z"});

    // select optionfrom drodown using index
    await page.locator("#products-orderby").selectOption({index:2});

    // use Get By Role
    await page.getByRole("combobox", {name: "position"}).selectOption({index:2});

    // print all dropdwon list elements
    const dropcontent:string[] = await page.locator("#products-orderby").allTextContents();
    console.log(dropcontent);

});


// print all dropdown elements
test("capture the list items",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/dropdown");

    // const theintdrop:string[] = await page.locator("#dropdown").allTextContents();
    const theintdrop:string[] = await page.locator("#dropdown>option").allTextContents();

    console.log("the dropdown list items here:", theintdrop);
});



// get the count of dropdown listitem.
test("get the count of dropdown listitem.",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/dropdown");

    // const theintdrop:string[] = await page.locator("#dropdown").allTextContents();
    const count= await page.locator("#dropdown>option").count();

    console.log("the dropdown list items here:", count);
});

*/



// verify the list item in dropdown
test("get the count of dropdown listitem.",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/dropdown");

    // const theintdrop:string[] = await page.locator("#dropdown").allTextContents();
    const item= await page.locator("#dropdown>option").allTextContents();
    
    await expect(item).toContain("Option 2");
    console.log("the dropdown list items here:", item);
});

