import {test, expect, Locator, Page} from '@playwright/test'

/*
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


test('Enter date into Textbox', async ({page})=>{
    await page.goto('https://sampleapp.tricentis.com/101/app.php');

    // Enter Date into Textbox
    await page.locator('#dateofmanufacture').fill('04/13/2026');


    // click on Calender Icon, select the Current date
    // const month:string = 'December'
    // const day = '10'
    // const year:string = '2024'

    // click on calender icon
    await page.locator('[name="Open Date of Manufacture Calender"]').click();

    // Verify the Month and year
    /*
    const currentmonth = await page.locator('.ui-datepicker-month').textContent();
    const currentyear = await page.locator('.ui-datepicker-year').textContent();

   console.log('The current month and year is here', currentmonth, currentyear);

   if(currentmonth===month && currentyear===year){
    console.log('the month and year are matched');
   }


 while(true){
    const currentmonth = await page.locator('.ui-datepicker-month').textContent();
    const currentyear = await page.locator('.ui-datepicker-year').textContent();
    
    if(currentmonth===month && currentyear===year){
    console.log('the month and year are matched');
    break;
   }
//    await page.locator('.ui-datepicker-next.ui-corner-all').click(); //future arrow

   await page.locator('.ui-datepicker-prev.ui-corner-all').click();
}

// select the date:
    // const selectday= await page.locator('.ui-state-default').allTextContents();
    const selectday= await page.locator('.ui-state-default').all();
    // console.log(selectday);

    for(let de of selectday){
        const daytext = await de.innerText();
        if(daytext===day){
            console.log('the day is', de);
            await de.click();
            break;
        }
    }


    const month:string = 'December'
    const day = '10'
    const year:string = '2024'
    selectdatefromcalender(month,year,day,page,false);

    await page.waitForTimeout(5000);
});

*/

test('date operations',async ({page})=>{

    await page.goto('https://sampleapp.tricentis.com/101/app.php');

    // Enter Date into Textbox
    // await page.locator('#dateofmanufacture').fill('04/13/2026');
    await page.locator('[name="Open Date of Manufacture Calender"]').click();
    const today = new Date();
    const currentDate = today.getDate();
    const currentMonth = today.toLocaleString('default', { month: 'long' });
    const currentYear = today.getFullYear().toString();

    console.log('today is here:', today);
    console.log('Current date is here:', currentDate);
    console.log('current month is here:', currentMonth);
    console.log('current year is here:', currentYear);
     // Step 3: get calendar month & year
    const calMonth  = await page.locator('.ui-datepicker-month');
    const calYear = await page.locator('.ui-datepicker-year');

    await expect(calMonth).toBeVisible();

    // Step 5: loop until month & year match
  while (true) {
    const displayedMonth = await calMonth.textContent();
    const displayedYear = await calYear.textContent();

    if (displayedMonth === currentMonth && displayedYear === currentYear) {
      break;
    }
    await page.locator('.ui-datepicker-next').click();
  }
    // Step 6: click current date
  await page.locator(`//a[text()='${currentDate}']`).click();

  await page.waitForTimeout(5000);
});