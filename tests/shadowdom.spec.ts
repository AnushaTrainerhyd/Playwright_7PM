import {test, expect} from '@playwright/test'

test("sahdowDOM Example 1", async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/shadowdom');

    const p1 = page.locator('my-paragraph').first();
    const text = await p1.textContent();
    console.log("P1 content text", text);
    expect(text).toContain("Let's have some different text!");

    const p2 = page.locator('my-paragraph').nth(1);
    const textp2 = await p2.textContent();
    console.log("P2 content text", textp2);
    expect(textp2).toContain("Let's have some different text!In a list!");

    await page.waitForTimeout(5000);
});