import{test, expect, Page} from '@playwright/test'

async function selectdatefromcalender(targetmonth:string, targetyear:string, targetday:string,page:Page, isfuture:boolean){
    while(true){
    const currentmonth = await page.locator('.ui-datepicker-month').textContent();
    const currentyear = await page.locator('.ui-datepicker-year').textContent();
    
    if(currentmonth===targetmonth && currentyear===targetyear){
    console.log('the month and year are matched');
    break;
   }

   if(isfuture){
    await page.locator('.ui-datepicker-next.ui-corner-all').click();
   }else{
    await page.locator('.ui-datepicker-prev.ui-corner-all').click();
   }
   await page.waitForTimeout(2000);
    }
        const selectday= await page.locator('.ui-state-default').all();
    // console.log(selectday);

    for(let de of selectday){
        const daytext = await de.innerText();
        if(daytext===targetday){
            console.log('the day is', de);
            await de.click();
            break;
        }
    }
}