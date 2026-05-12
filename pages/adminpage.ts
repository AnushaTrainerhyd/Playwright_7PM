import {Page, Locator, expect} from '@playwright/test';


export class AdminPage{

    // create variables and make it private
    private readonly page:Page;
    private readonly addbtn: Locator;
    private readonly Userroleselect: Locator;
    private readonly Userrole: Locator;
    private readonly Empname:Locator;
    private readonly Empname1:Locator;
    private readonly status: Locator;
    private readonly statusoption: Locator;
    private readonly Username:Locator;
    private readonly Password:Locator;
    private readonly ConfirmPassword:Locator;
    private readonly savebtn:Locator;
    private readonly successmsg:Locator;

    constructor(page:Page){
        this.page = page;
        this.addbtn = this.page.getByRole('button', { name: ' Add' });
        this.Userrole = this.page.getByText('-- Select --').first();
        this.Userroleselect = this.page.getByRole('option', { name: 'Admin' });
        this.Empname = this.page.getByRole('textbox', { name: 'Type for hints...' });
        this.Empname1 = this.page.getByText('Sriram Automation').first();

        this.status = this.page.getByText('-- Select --');
        this.statusoption = this.page.getByRole('option', { name: 'Enabled' });

        this.Username = this.page.getByRole('textbox').nth(2);

        this.Password = this.page.getByRole('textbox').nth(3);
        this.ConfirmPassword = this.page.getByRole('textbox').nth(4);

        this.savebtn = this.page.getByRole('button', { name: 'Save' });
        this.successmsg = this.page.getByText('Success', { exact: true });
    }

// actions:
async clickonAdd(){
    await this.addbtn.click();
}

async selectUserrole(){
    await this.Userrole.click();
    await this.Userroleselect.click();
}


async Enterempname(Empname:string){
    await this.Empname.fill(Empname);
}

async SelectStatus(){
    await this.status.click();
    await this.statusoption.click();
}

async EnterUsername(Username:string){
    await this.Username.fill(Username);
}

async EnterPassword(Password:string){
    await this.Password.fill(Password);
}

async EnterConfirmPassword(ConfirmPassword:string){
    await this.ConfirmPassword.fill(ConfirmPassword);
}

async verifysuccessmessage(successmsg:string){

    await expect(this.successmsg).toBeVisible();
}
async clickSave(){
    await this.savebtn.click();
}

async FillAdminForm(
    Empname:string, 
    Username:string, 
    Password:string, 
    ConfirmPassword:string, 
    successmsg:string
){
    // select the role
    await this.Userrole.click();
    await this.Userroleselect.click();

    // enter the EMP
    await this.Empname.fill(Empname);
    await this.Empname1.click();

    // Select Status
    await this.status.click();
    await this.statusoption.click();

// Enter Username
    await this.Username.fill(Username);
    await this.Password.fill(Password);
    await this.ConfirmPassword.fill(ConfirmPassword);

    await this.savebtn.click();

    await expect(this.successmsg).toBeVisible();

}
}