import {test, expect} from '@playwright/test'

test('infinite scroll up footer', async({page})=>{
    test.slow(); // defalt time increase 3 times (30000)
    // await page.goto('https://the-internet.herokuapp.com/infinite_scroll');
    // await page.goto('https://www.meesho.com/search?q=shirts');
    let prev = 0;
    while(true){

         //based on locator
        //  const shirt = await page.locator('#shirt').allTextContents();
        // if(shirt.includes("latest Men Shirt")){
        //     console.log("shirt found", shirt);
        //     break;
        // }

        await page.waitForTimeout(3000);
        const current = await page.evaluate( ()=>{
            window.scrollTo(0,document.body.scrollHeight);
            return document.body.scrollHeight;
        });
        console.log("previous height", prev);
        console.log("current height", current);

        if(prev===current){
            break;
        }

        prev=current;
        await page.waitForTimeout(5000);
    } 
    console.log("Reahced end");

});