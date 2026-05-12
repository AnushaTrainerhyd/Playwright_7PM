import {test, expect, Locator} from '@playwright/test'

/*
test("capture the list items",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/dropdown")
    const theintdrop:string[] = await page.locator("#dropdown>option").allTextContents();

    // console.log(`the dropdown list items here: ${theintdrop}`);
    // await theintdrop.map(a => a.trim());
    console.log("the dropdown list items here:", theintdrop);
    for(const i of theintdrop){
        console.log(i);
    }

    expect(theintdrop).toContain('Option 2')

    const theint = await page.locator("#dropdown>option").count();
    console.log("The Type of theint", typeof(theint), theint);
    
    await expect(page.locator("#dropdown>option")).toHaveCount(3);
    
});


test("multi select dropdown", async({page})=>{
    await page.goto("https://obstaclecourse.tricentis.com/Obstacles/94441/retry");
    await page.locator("#multiselect").selectOption(['Functional testing','End2End testing']);
    const b  = await page.locator("#multiselect>option")
    await b.count();
    console.log(' the count', b);

    // check all the elements are sorted or not in multi select checkbox:
const droplist = await b.allTextContents();
// console.log(droplist);

const orginal:string[] = [...droplist];
const sortarra:string[] = [...droplist].sort();

console.log(orginal);
console.log(sortarra);

// verify both array are equal:
expect(orginal).toEqual(sortarra);

})


test("dulicate varification", async ({page})=>{
    // await page.goto("https://demoqa.com/select-menu");
    // const menu = await page.locator('#oldSelectMenu>option').allTextContents();
    await page.goto("file:///C:/Users/Anusha/Downloads/banking_interface.html");
    const menu = await page.locator('#accountType>option').allTextContents();
    console.log('they type os array', menu);

    const set:any  = new Set(menu);
    console.log(set, set.size);
    const set1 = [...new Set(menu)];
    console.log(set1, set1.length);

    expect(menu).toEqual(set1);
})

test("dynamic drodowns", async ({page})=>{

    await page.goto("https://www.google.com/",{waitUntil:"domcontentloaded"});
    const textbox = page.locator('[name="q"]');
    await textbox.fill("word to pdf");
    await page.waitForTimeout(5000);
    // const menu = await page.locator('role=["option"]').textContent();
    // menu.first().waitFor();
    const options = page.getByRole('option');
    await options.first().waitFor();
    const allText = await options.allTextContents();
    console.log("the count of all text", allText);
    const cnt = await options.count();
    // await options.nth(6).click();

    for(let i = 0; i < cnt; i++){
        const text = await options.nth(i).innerText();
        if(text == 'word to pdf converter online'){
            await options.nth(i).click();
            console.log(text);
            break;
        }
    } 
});


test("amazon search",async ({page})=>{
    await page.goto("https://www.amazon.in/", {waitUntil:"domcontentloaded"});
    
    const search = await page.locator("twotabsearchtextbox");
    await expect(search).toBeVisible();
    // await search.fill('iphone');
    search.first().waitFor();
    const list = await page.locator("span.s-heavy");
    const count = list.count();
    console.log(list);

    const text = list.allTextContents();
    console.log(text);
});


test("flipkart search",async ({page})=>{
    await page.goto("https://www.myntra.com/");
    
    // const search = await page.locator(".desktop-searchBar");
    const search = await page.getByPlaceholder('Search for products, brands and more').fill("dove");

});
*/

test("table Operations", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/tables")

      // 1️⃣ Get table
  const table = page.getByRole('table').filter({hasText:"Last Name"});

  // 2️⃣ Get all rows (including header)
  const rows = table.getByRole('row');
  const rowCount = await rows.count();

  console.log('Total Rows (including header):', rowCount);

  // 3️⃣ Get columns (from header row)
  const header = rows.first();
  const columns = header.getByRole('columnheader');
  const columnCount = await columns.count();

  console.log('Total Columns:', columnCount);

  const headerrow = await columns.allTextContents();
  const headerrowall:Locator[] = await columns.all();
  console.log(headerrow);
  
  await expect(columns).toHaveText(headerrow);


});


// page --> Fixtures (page) --> page an variable
// test("TC01_ verify application title",async({page})=>{
//     await page.goto("https://www.amazon.in/"); // it takes some time to load the page
//     let title:string = await page.title();
//     console.log(title);
//     await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in"); // complete title name it give error
//     await expect(page).toHaveTitle(/Online Shopping site/); // Regular /Online Shoping site/
// });



// await (Async)

// (page) --> arrow function name fo the parameter, {page}

// test("sample test",({page})=>{
//     page.goto("")
//     // let title:string = page.title();
//     // console.log(title);
// });
