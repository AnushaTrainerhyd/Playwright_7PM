import {test, expect} from '@playwright/test'
test('Drag/drop the elements', async ({page})=>{
    await page.goto("https://obstaclecourse.tricentis.com/Obstacles/60469/retry");

    const source = page.getByAltText('Toscabot');
    const dest = page.locator('#to');

    // direct method
    // await source.dragTo(dest);

    // 2. approach (mouse)
    await source.hover();
    await page.mouse.down();

    await dest.hover();
    await page.mouse.up();

    await page.waitForTimeout(5000);
});