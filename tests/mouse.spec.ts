import {test, expect} from '@playwright/test'

/*test("click Operations", async({page})=>{
    page.goto('https://demoqa.com/buttons');

    // const clickme = page.locator('.btn.btn-primary');
    const clickme = page.getByRole('button', {name:'Click Me', exact: true });
    const rightclick  = page.locator('#rightClickBtn');
    const doubleclick = page.locator('#doubleClickBtn');

    // click an d verify  the message
    await clickme.click();  // it takes left click
    const clickmetext = page.locator('#dynamicClickMessage');
    await clickmetext.waitFor({state:'visible'})
    console.log('the text of the control is',await clickmetext.innerText());
    await expect(clickmetext).toHaveText('You have done a dynamic click');

    // Right Click and verify the message
    await rightclick.click({button:'right'});
    await rightclick.waitFor({state:'visible'})
    await expect(page.locator('#rightClickMessage')).toHaveText('You have done a right click');

    // double click and verify the message:
    await doubleclick.dblclick();
    await doubleclick.waitFor({state:'visible'})
    await expect(page.locator('#doubleClickMessage')).toHaveText('You have done a double click');
    
    await page.waitForTimeout(5000);
}); */

test('move hover', async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/books");

    const Electronics = page.getByRole('link', {name:'Electronics'});
    await Electronics.first().hover();

    const Cellphones = page.getByRole('link', {name:'Cell phones'});
    await Cellphones.click();

    await page.waitForTimeout(5000);
})

