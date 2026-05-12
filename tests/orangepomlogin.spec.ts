import{test, expect} from '@playwright/test';

import { LoginPage } from '../pages/orangelogin';
import { dashboard } from '../pages/orangedashboard';


test ("Orange Hrm login page", async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // login page details
    const loginpage = new LoginPage(page);
    await loginpage.enterusername('Admin');
    await loginpage.enterpassword('admin123');
    await loginpage.clickonlogin();

    // await loginpage.loginfunctionality('Admin', 'admin123');

    // click on apply leave:
    const dashboardelements = new dashboard(page);

    await dashboardelements.clickapplyleave();
    await dashboardelements.verifyapplyleavemessage('No Leave Types with Leave Balance');

})

/*test("click on apply leave", async({page})=>{
    const dashboardelements = new dashboard(page);

    await dashboardelements.clickapplyleave();
    await dashboardelements.verifyapplyleavemessage('No Leave Types with Leave Balance');

})*/