import {test, expect} from '@playwright/test'

/*
test('iframe scenario 1', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/iframe');

    const frame = page.frameLocator('#mce_0_ifr');

    const text = await frame.locator('body').textContent();

    console.log('the iframe body text is here',text);

    expect(text).toContain("Your content goes here.");
    
    await page.waitForTimeout(5000);

});


test('multiple iframe scenario 2', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/nested_frames');

    const frametop = page.frameLocator('[name="frame-top"]')

    // left frame
    const leftframe = frametop.frameLocator('[name="frame-left"]');
    const text = await leftframe.locator('body').innerText();
    console.log('left iframe:',text);
    expect(text).toContain("LEFT");
    
    // right
    const rightframe = frametop.frameLocator('[name="frame-right"]');
    const textright = await rightframe.locator('body').innerText();
    console.log('right iframe:',textright);
    expect(textright).toContain("RIGHT");
    await page.waitForTimeout(5000);

    // middle
    const middleframe = frametop.frameLocator('[name="frame-middle"]');
    const middletext = await middleframe.locator('body').innerText();
    console.log('Middle iframe:',middletext);
    expect(middletext).toContain("MIDDLE");

    // bottom frame
    const bottomframe = page.frameLocator('[name="frame-bottom"]');
    const bottomtext = await bottomframe.locator('body').innerText();
    console.log('bottom iframe:',bottomtext);
    expect(bottomtext).toContain("BOTTOM");   
});

*/


test("stripframes", async({page})=>{
    test.setTimeout(40000);
    test.slow() // default time triple (30000) = (90000)
    await page.goto("https://stripe-payments-demo.appspot.com/", {timeout:6000});
    // frame details
    const frame = page.frameLocator('[title="Secure card payment input frame"]');
    
    // enter card number
    const cardnumber = frame.locator('[name="cardnumber"]');

    await expect(cardnumber).toBeVisible({timeout:7000});
    
    await cardnumber.fill('42424242424242');

    // enter Exp date
    const expdate = frame.locator('[name="exp-date"]');
    await expdate.fill('12/30');

    // enter cvc
    const cvc = frame.locator('[name="cvc"]');
    await cvc.fill('123');
    await page.waitForTimeout(5000);
});








