import {test, expect} from '@playwright/test'

test("verify multidropdown sorting order", async({page})=>{
    await page.goto("https://obstaclecourse.tricentis.com/Obstacles/94441/retry");

    const mdrop = await page.locator("#multiselect>option").allTextContents();
    // console.log(mdrop);

    // const original:string[] = mdrop;
    // const sort:string[] = original.sort(); // mutable

    // spread operator 3dots
    const original:string[] = [...mdrop];
    const sort:string[] = [...original].sort();

    console.log("the orginal array", original);
    console.log("the sort array", sort);
})