import {test, expect} from '@playwright/test'
/*
test("scroll window", async({page})=>{
    test.slow();
    await page.goto("https://demowebshop.tricentis.com/cart");
    await page.mouse.wheel(0,1000) // scroll down
    await page.waitForTimeout(5000);

    await page.mouse.wheel(0,-1000)  // scroll up
    await page.waitForTimeout(5000);
});


test("dropdown manual scroll and click", async ({ page }) => {
  await page.goto("https://sampleapp.tricentis.com/101/app.php");
  await page.locator("#enterinsurantdata").click();

  // Step 1: Select element ni open/expanded list
  await page.locator("#country").evaluate((select) => {
    select.setAttribute("size", "10"); // 10 options visible
  });

  // Step 2: India option locate cheyyi
  const indiaOption = page.locator('#country option[value="India"]');

  // Step 3: scroll India
  await indiaOption.scrollIntoViewIfNeeded();
  await page.waitForTimeout(4000);
  // Step 4: India click cheyyi
  await indiaOption.click();

  // Step 5: Size back to normal
  await page.locator("#country").evaluate((select) => {
    select.removeAttribute("size");
  });

  // Verify
  const selected = await page.locator("#country").inputValue();
  console.log("Selected:", selected);
});
*/

test("table scrolling", async({page})=>{
  await page.goto('https://obstaclecourse.tricentis.com/Obstacles/73591/retry')    
  const table = page.locator('#tableContent');

  // vertical scroll
  await table.evaluate((scr)=>{
    scr.scrollTop = 300; //vertical scroll
    scr.scrollLeft= 400; // Horizontal scroll

  });
  await page.waitForTimeout(5000);

  //  scroll upto specific value in table:
  // const tablecell = page.locator('17_16');
 const tablecell= page.getByRole('cell', {name:'g1it'})
  // await tablecell.scrollIntoViewIfNeeded();
  await expect(tablecell).toBeVisible();
  await page.waitForTimeout(5000);
});