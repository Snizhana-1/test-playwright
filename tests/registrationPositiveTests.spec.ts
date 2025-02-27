import { test, expect } from '@playwright/test';

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

        await test.step('Fill a correct name data',async()=>{
                const inputName=page.locator('[name="name"]');
                await inputName.fill('Greta');
        });
        
        await test.step('Fill a correct Last name data',async()=>{
                const inputLastName=page.locator('[name="lastName"]');
                await inputLastName.fill('Thunberg');
        });

        await test.step('Fill a correct email data',async()=>{
               const inputEmail=page.locator( '#signupEmail');
                await inputEmail.fill('aqa-Greta-Thunberg@gmail.com');
        });

        await test.step('Fill a correct password data',async()=>{
                const inputPassword=page.locator('#signupPassword');
                await inputPassword.fill('123Abcd123');
        });

        await test.step('Fill a correct re-enter password data',async()=>{
                const inputReEnterPassword=page.locator('#signupRepeatPassword');
                await inputReEnterPassword.fill('123Abcd123');
        });

        await test.step('Check the availability of the button when entering all fields with correct data',async()=>{
                const registerButton=page.getByRole('button',{name:'Register'});
                await expect(registerButton).toBeVisible();
                await expect(registerButton).toBeEnabled();
                await registerButton.click();

        });
});