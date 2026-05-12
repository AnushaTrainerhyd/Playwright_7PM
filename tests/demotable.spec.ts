import{test, expect} from '@playwright/test'

test("cart table",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com");

    //  add item to the cart:
    const books = page.locator('[href="/books"]');
    await books.first().click();

    const addtocart = page.locator('[value="Add to cart"]');
    await addtocart.nth(1).click(); 

    await page.waitForTimeout(3000);
    // click on shopping cart
    await page.locator("a.ico-cart").first().click();

    const table = page.locator('table.cart tbody tr');
    console.log("the number of rows", await table.count());

    // Click on Check box(first Column)
    // const firstrowdata = await table.locator('td').allTextContents();
    const firstrowdata = table.locator('td');
    console.log(await firstrowdata.allInnerTexts());

    // Click on checkbox
    // await firstrowdata.locator('[type="checkbox"]').click();

    // Enter Qty as 5
    const qty = firstrowdata.locator('.qty-input');
    await qty.fill('5');
    await qty.press('Enter');

    // click on Product
    // await firstrowdata.locator('.product-name').click();

    //  Verify the total amount 
    const price = await firstrowdata.locator('.product-unit-price').textContent(); 
    await page.waitForTimeout(5000);
      const qtyamnt =  await qty.getAttribute('value');

    console.log(`the prices of product is ${price} and the qty is  ${qtyamnt} here`);

    await page.waitForTimeout(5000);

});
