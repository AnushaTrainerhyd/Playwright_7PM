import {test, expect} from '@playwright/test'
/*
test("upload the file", async({page})=>{

    await page.goto('https://sampleapp.tricentis.com/101/app.php')
    await page.locator("#enterinsurantdata").click();

    // click on upload:
    const [filechooser] =await Promise.all([page.waitForEvent('filechooser'), 
        page.click('.ideal-file-upload[type="button"]')]);
    filechooser.setFiles('./Upload/image1.png');

    const nameoffile = await page.locator('#picture').inputValue();
    
    console.log('the name of the file is :', nameoffile);

    expect(nameoffile).toContain('image1.png')
    console.log("image uploaded successfully");

    await page.waitForTimeout(5000);
})

test('Stripe final stable fix', async ({ page }) => {

  await page.goto('https://stripe-payments-demo.appspot.com/');

  // --- CARD ---
  const cardFrame = page.frameLocator('iframe[title="Secure card payment input frame"]');
  const cardInput = cardFrame.locator('input[aria-label="Credit or debit card number"]');

  await cardInput.fill('4242424242424242');

  // Trigger validation
  await cardInput.press('Tab');

  await page.waitForTimeout(3000);
  // --- 🔥 WAIT FOR EXPIRY IFRAME ---
  await page.waitForSelector('iframe[placeholder="MM / YY"]');

  const expiryFrame = page.frameLocator('iframe[title="Secure expiration date input frame"]');
  const expiryInput = expiryFrame.locator('input');

  // Wait until input is visible
  await expiryInput.waitFor();

  await expiryInput.fill('12/30');

  await expiryInput.press('Tab');

  // --- 🔥 WAIT FOR CVC IFRAME ---
  await page.waitForSelector('iframe[title="Secure CVC input frame"]');

  const cvcFrame = page.frameLocator('iframe[title="Secure CVC input frame"]');
  const cvcInput = cvcFrame.locator('input');

  await cvcInput.waitFor();

  await cvcInput.fill('123');

  // Pay
  await page.locator('button:has-text("Pay")').click();

});

test('Stripe single iframe flow - fixed', async ({ page }) => {

  await page.goto('https://stripe-payments-demo.appspot.com/');

  const frame = page.frameLocator('iframe[title="Secure card payment input frame"]');

  // Card Number
  await frame
    .getByRole('textbox', { name: 'Credit or debit card number' })
    .fill('4242424242424242');

  // Expiry
  await frame
    .getByRole('textbox', { name: 'Credit or debit card expiration date' })
    .fill('12/25');

  // CVC
  await frame
    .getByRole('textbox', { name: 'Credit or debit card CVC/CVV' })
    .fill('123');

  // Pay
  await page.getByRole('button', { name: 'Pay' }).click();

  await page.waitForTimeout(5000);

});


test('Verify text inside TinyMCE iframe', async ({ page }) => {
  
  // Step 1: Open page
  await page.goto('https://the-internet.herokuapp.com/iframe');

  // Step 2: Switch to iframe
  const frame = page.frameLocator('#mce_0_ifr');

  // Step 3: Get text from body inside iframe
  const text = await frame.locator('body').textContent();

  // Step 4: Verify text
   expect(text).toContain('Your content goes here.');
  
   await page.waitForTimeout(5000);
});
*/

test('Shop Now flow', async ({ page }) => {

  await page.goto('https://shop.polymer-project.org/');

  const shopBtn = page.getByRole('link', { name: "Men's Outerwear Shop Now" });

  // Verify text
  await expect(shopBtn).toHaveText('Shop Now');

  // Click
  await shopBtn.click();

  // Verify navigation
  await expect(page).toHaveURL(/mens_outerwear/);

});