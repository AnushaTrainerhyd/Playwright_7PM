import {Page, Locator} from '@playwright/test';


export class LoginPage{

    // create variables and make it private
    private readonly page:Page;
    private readonly username: Locator;
    private readonly password: Locator;
    private readonly loginbutton: Locator;

    constructor(page:Page){
        this.page = page;
        this.username = this.page.getByRole('textbox', { name: 'Username' });
        this.password = this.page.getByRole('textbox', { name: 'Password' });
        this.loginbutton = this.page.getByRole('button', { name: 'Login' });
    }

// actions:
async enterusername(username:string){
    await this.username.fill(username);
}

async enterpassword(password:string){
    await this.password.fill(password);
}

async clickonlogin(){
    await this.loginbutton.click();
}

async loginfunctionality(username:string,password:string){
    await this.enterusername(username);
    await this.enterpassword(password);
    await this.clickonlogin();
}

}