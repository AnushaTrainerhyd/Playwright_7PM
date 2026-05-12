import {test, expect} from '@playwright/test'

test("table Operations", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/tables");

    // const table = page.getByRole('table').filter({hasText:'Last Name'});
    const table = page.locator("#table1");

    // get the count of number of rows  (rowcount - include header)
    const row = table.getByRole('row');
    const rowcnt = await row.count()
    console.log("get the rowcount", rowcnt);

    // verify the count
    await expect(row).toHaveCount(5);

    //get the Column Count
    const col = table.getByRole("columnheader");
    const colcnt = await col.count();
    console.log("the table column count is here:",colcnt);

    // Print the Header names:
    const header = await col.allTextContents();
    console.log(header);

    // verify the header text:
    await expect(col).toHaveText([ 'Last Name', 'First Name', 'Email', 'Due', 'Web Site', 'Action' ]);
    await expect(col).toHaveText(header);

    // get the row for Jason
    const Jason = table.getByRole('row').filter({hasText:'Jason'});
    const Jasonrecord = await Jason.allTextContents();
    // const Jasonrecord = await Jason.allInnerTexts();

    console.log("the Jason record", Jasonrecord);
    await expect(Jason).toContainText('jdoe@hotmail.com');
});