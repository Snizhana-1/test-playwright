import { test, expect } from '@playwright/test';
import { registrationForm} from '../pages/registrationPositive';

test.beforeEach( async ({page,context})=>{
        await context.setHTTPCredentials ({
                username: 'guest' ,
                password: 'welcome2qauto'
         });

        await page.goto('https://qauto.forstudy.space/');

        await page.getByText('Sign In').waitFor();
        await page.getByText('Sign In').click();

        await page.getByText('Registration').waitFor();
        await page.getByText('Registration').click();
});

test('Successful registration', async ({ page })=>{
        const registrationPage=new registrationForm(page);

        await test.step('Fill a correct data in the registration form',async()=>{
                await registrationPage.fillRegistrationForm('Greta', 'Thunberg', 'aqa-Greta-Thunberg@gmail.com', '123Abcd123','123Abcd123');
        });

        await test.step('Submit the data',async()=>{
                await registrationPage.submitRegistration();
                await expect (registrationPage.registerButton).toBeVisible();
                await expect(registrationPage.registerButton).toBeEnabled();
        });
});