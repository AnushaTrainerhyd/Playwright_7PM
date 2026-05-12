import {Page, Locator, expect} from '@playwright/test';


export class dashboard{

    // create variables and make it private
    private readonly page:Page;
    private readonly applyLeave: Locator;
    private readonly applyLeavemessage: Locator;
    private readonly Adminpage:Locator;

    constructor(page:Page){
        this.page = page;
        this.applyLeave = this.page.locator('[title="Apply Leave"]');
        this.applyLeavemessage = this.page.locator('p.oxd-text.oxd-text--p.oxd-text--subtitle-2').first();
        this.Adminpage = this.page.getByRole('link', { name: 'Admin' });
    }

// actions:
async clickapplyleave(){
    await this.applyLeave.first().click()
}

async verifyapplyleavemessage(applyLeavemessage:string){

    await expect(this.applyLeavemessage).toHaveText(applyLeavemessage);
}
async clickAdmin(){
    await this.Adminpage.click();
}
}