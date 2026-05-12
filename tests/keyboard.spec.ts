import {test, expect} from '@playwright/test'

test("keyboard actions", async({page})=>{

    await page.goto('https://sampleapp.tricentis.com/101/app.php')
    // 1) click on control verify focused
    const text = page.locator('#payload');
    await text.click();
    await expect(text).toBeFocused();

    // 2) enter Text 
    await page.keyboard.insertText('2345');

    // 3 ) copy the text  ctrl + A  & Ctrl +C
    // await page.keyboard.down('Control');
    // await page.keyboard.press('A');
    // await page.keyboard.up('Control');

    await page.keyboard.press('Control+A');  //select the text
    await page.keyboard.press('Control+C'); // copy the text

    // 4) tab verify focused
    await page.keyboard.press('Tab');
    await expect(page.locator('#totalweight')).toBeFocused();
    
    // 5) same the text ctrl + V
    await page.keyboard.press('Control+V');

    await page.waitForTimeout(5000);
})