import{test, expect} from '@playwright/test';

import { LoginPage } from '../pages/orangelogin';
import { dashboard } from '../pages/orangedashboard';
import { AdminPage } from '../pages/adminpage';
import { TestConfig } from '../test.config';


test ("Orange Hrm login page", async({page})=>{
    const orange = new TestConfig();
    await page.goto(orange.applicationUrl);

    await page.waitForTimeout(2000);
    // login page details
    const loginpage = new LoginPage(page);
    await loginpage.enterusername('Admin');
    await loginpage.enterpassword('admin123');
    await loginpage.clickonlogin();

    // await loginpage.loginfunctionality('Admin', 'admin123');
 await page.waitForTimeout(2000);
    // click on apply leave:
    const dashboardelements = new dashboard(page);

    await dashboardelements.clickAdmin();

    // admin page
    const adpage = new AdminPage(page);

    await adpage.clickonAdd();
     await page.waitForTimeout(2000);

    await adpage.FillAdminForm('Sriram Automation', 'Siri123', 'Admin@123', 'Admin@123', 'Success' );
   
 await page.waitForTimeout(2000);
});
