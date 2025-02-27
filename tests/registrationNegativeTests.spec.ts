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

test.describe('Check the field name',()=>{
   test('Check the empty field', async ({ page })=>{
        const nameInput=page.locator('#signupName');
        await nameInput.focus();
        await nameInput.blur();
        await expect(page.getByText('Name required')).toBeVisible();
        await expect(nameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
   });

   test('Check length is less than 2 characters', async ({ page })=>{
        const nameInput=page.locator('#signupName');
        await nameInput.fill('A');
        await nameInput.blur();
        await expect(page.getByText('Name has to be from 2 to 20 characters long')).toBeVisible();
        await expect(nameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
   });

   test('Check length is more than 20 characters', async ({ page })=>{
        const nameInput=page.locator('#signupName');
        await nameInput.fill('Aaaaaaaaaaaaaaaaaaaaa');
        await nameInput.blur();
        await expect(page.getByText('Name has to be from 2 to 20 characters long')).toBeVisible();
        await expect(nameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
   });

   test('Check using the wrong data', async ({ page })=>{
        const nameInput=page.locator('#signupName');
        await nameInput.fill('@123');
        await nameInput.blur();
        await expect(page.getByText('Name is invalid')).toBeVisible();
        await expect(nameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
   });

   test('Check when using non-English letters', async ({ page })=>{
        const nameInput=page.locator('#signupName');
        await nameInput.fill('Ґрета');
        await nameInput.blur();
        await expect(page.getByText('Name is invalid')).toBeVisible();
        await expect(nameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
   });
});

test.describe('Check the field last name',()=>{
        test('Check the empty field', async ({ page })=>{
             const lastNameInput=page.locator('#signupLastName');
             await lastNameInput.focus();
             await lastNameInput.blur();
             await expect(page.getByText('Last name required')).toBeVisible();
             await expect(lastNameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        });
     
        test('Check length is less than 2 characters', async ({ page })=>{
             const lastNameInput=page.locator('#signupLastName');
             await lastNameInput.fill('A');
             await lastNameInput.blur();
             await expect(page.getByText('Last name has to be from 2 to 20 characters long')).toBeVisible();
             await expect(lastNameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        });
     
        test('Check length is more than 20 characters', async ({ page })=>{
             const lastNameInput=page.locator('#signupLastName');
             await lastNameInput.fill('Aaaaaaaaaaaaaaaaaaaaa');
             await lastNameInput.blur();
             await expect(page.getByText('Last name has to be from 2 to 20 characters long')).toBeVisible();
             await expect(lastNameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        });
     
        test('Check using the wrong data', async ({ page })=>{
             const lastNameInput=page.locator('#signupLastName');
             await lastNameInput.fill('@123');
             await lastNameInput.blur();
             await expect(page.getByText('Last name is invalid')).toBeVisible();
             await expect(lastNameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        });
     
        test('Check when using non-English letters', async ({ page })=>{
             const lastNameInput=page.locator('#signupLastName');
             await lastNameInput.fill('Тумберг');
             await lastNameInput.blur();
             await expect(page.getByText('Last name is invalid')).toBeVisible();
             await expect(lastNameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        });
});

test.describe('Check the field email',()=>{
        test('Check the empty field', async ({ page })=>{
             const emailInput=page.locator('#signupEmail');
             await emailInput.focus();
             await emailInput.blur();
             await expect(page.getByText('Email required')).toBeVisible();
             await expect(emailInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        });
     
        test('Check the email field using the wrong format = withot @ sign', async ({ page })=>{
             const emailInput=page.locator('#signupEmail');
             await emailInput.fill('aqa-Greta-Thunberggmail.com');
             await emailInput.blur();
             await expect(page.getByText('Email is incorrect')).toBeVisible();
             await expect(emailInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        });

        test('Check the email field using the wrong format = withot .com part', async ({ page })=>{
                const emailInput=page.locator('#signupEmail');
                await emailInput.fill('aqa-Greta-Thunberg@gmail');
                await emailInput.blur();
                await expect(page.getByText('Email is incorrect')).toBeVisible();
                await expect(emailInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
           });

        test('Check the email field using the wrong format = user forgot a point', async ({ page })=>{
                const emailInput=page.locator('#signupEmail');
                await emailInput.fill('aqa-Greta-Thunberg@gmailcom');
                await emailInput.blur();
                await expect(page.getByText('Email is incorrect')).toBeVisible();
                await expect(emailInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
           });

           test('Check the email field using the wrong format = user add a number in the second part of email', async ({ page })=>{
                const emailInput=page.locator('#signupEmail');
                await emailInput.fill('aqa-Greta-Thunberg@gmail.com3');
                await emailInput.blur();
                await expect(page.getByText('Email is incorrect')).toBeVisible();
                await expect(emailInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
           });
});

test.describe('Check the field password',()=>{
        test('Check the empty field', async ({ page })=>{
             const passwordInput=page.locator('#signupPassword');
             await passwordInput.focus();
             await passwordInput.blur();
             await expect(page.getByText('Password required')).toBeVisible();
             await expect(passwordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        });
     
        test('Check length is less than 8 characters', async ({ page })=>{
             const passwordInput=page.locator('#signupPassword');
             await passwordInput.fill('123Abcd');
             await passwordInput.blur();
             await expect(page.getByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')).toBeVisible();
             await expect(passwordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        });
     
        test('Check length is more than 15 characters', async ({ page })=>{
                const passwordInput=page.locator('#signupPassword');
                await passwordInput.fill('123Abcd123Abcd123');
                await passwordInput.blur();
                await expect(page.getByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')).toBeVisible();
                await expect(passwordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        });
     
        test('Check the test with a length from 8 to 15 min 1 capital letter and 1 small letter', async ({ page })=>{
                const passwordInput=page.locator('#signupPassword');
                await passwordInput.fill('AbcdAbcd');
                await passwordInput.blur();
                await expect(page.getByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')).toBeVisible();
                await expect(passwordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        });

        test('Check the test with a length from 8 to 15 min 1 integer and 1 small letter', async ({ page })=>{
                const passwordInput=page.locator('#signupPassword');
                await passwordInput.fill('bcd123bcd');
                await passwordInput.blur();
                await expect(page.getByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')).toBeVisible();
                await expect(passwordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        });

        test('Check the test with a length from 8 to 15 min 1 integer and 1 capital letter', async ({ page })=>{
                const passwordInput=page.locator('#signupPassword');
                await passwordInput.fill('123ABC123');
                await passwordInput.blur();
                await expect(page.getByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')).toBeVisible();
                await expect(passwordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        });
});

test.describe('Check the field re-enter password',()=>{
        test('Check the empty field', async ({ page })=>{
             const rePasswordInput=page.locator('#signupRepeatPassword');
             await rePasswordInput.focus();
             await rePasswordInput.blur();
             await expect(page.getByText('Re-enter password required')).toBeVisible();
             await expect(rePasswordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        });
     
        test('Check if the passwords do not match', async ({ page })=>{
             const passwordInput=page.locator('#signupPassword');
             await passwordInput.fill('AbcdAbc123');
             const rePasswordInput=page.locator('#signupRepeatPassword');
             await rePasswordInput.fill('Abcdbc23');
             await rePasswordInput.blur();
             await expect(page.getByText('Passwords do not match')).toBeVisible();
             await expect(rePasswordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        });
});
test.describe('Check the button Register',()=>{
        test('Check that the button is not clickable,all fields are filled in correctly, except for the name field',async({page})=>{
          const nameInput=page.locator('#signupName');
          await nameInput.focus();
          await nameInput.blur();

          const inputLastName=page.locator('[name="lastName"]');
          await inputLastName.fill('Thunberg');

          const inputEmail=page.locator( '#signupEmail');
          await inputEmail.fill('aqa-Greta-Thunberg@gmail.com');

          const inputPassword=page.locator('#signupPassword');
          await inputPassword.fill('123Abcd123');

          const inputReEnterPassword=page.locator('#signupRepeatPassword');
          await inputReEnterPassword.fill('123Abcd123');

          const registerButton=page.getByRole('button',{name:'Register'});
          await expect(registerButton).toBeVisible();
          await expect(registerButton).toBeDisabled();
        });

        test('Check that the button is not clickable,all fields are filled in correctly, except for the last name field',async({page})=>{
          const inputName=page.locator('[name="name"]');
          await inputName.fill('Greta');

          const lastNameInput=page.locator('#signupLastName');
          await lastNameInput.focus();
          await lastNameInput.blur();

          const inputEmail=page.locator( '#signupEmail');
          await inputEmail.fill('aqa-Greta-Thunberg@gmail.com');

          const inputPassword=page.locator('#signupPassword');
          await inputPassword.fill('123Abcd123');

          const inputReEnterPassword=page.locator('#signupRepeatPassword');
          await inputReEnterPassword.fill('123Abcd123');

          const registerButton=page.getByRole('button',{name:'Register'});
          await expect(registerButton).toBeVisible();
          await expect(registerButton).toBeDisabled();
        });

        test('Check that the button is not clickable,all fields are filled in correctly, except for the email field',async({page})=>{
          const inputName=page.locator('[name="name"]');
          await inputName.fill('Greta');

          const inputLastName=page.locator('[name="lastName"]');
          await inputLastName.fill('Thunberg');

          const inputEmail=page.locator( '#signupEmail');
          await inputEmail.focus();
          await inputEmail.blur();

          const inputPassword=page.locator('#signupPassword');
          await inputPassword.fill('123Abcd123');

          const inputReEnterPassword=page.locator('#signupRepeatPassword');
          await inputReEnterPassword.fill('123Abcd123');

          const registerButton=page.getByRole('button',{name:'Register'});
          await expect(registerButton).toBeVisible();
          await expect(registerButton).toBeDisabled();
        });

        test('Check that the button is not clickable,all fields are filled in correctly, except for the password field',async({page})=>{
          const inputName=page.locator('[name="name"]');
          await inputName.fill('Greta');

          const inputLastName=page.locator('[name="lastName"]');
          await inputLastName.fill('Thunberg');

          const inputEmail=page.locator( '#signupEmail');
          await inputEmail.fill('aqa-Greta-Thunberg@gmail.com');

          const inputPassword=page.locator('#signupPassword');
          await inputPassword.focus();
          await inputPassword.blur();

          const inputReEnterPassword=page.locator('#signupRepeatPassword');
          await inputReEnterPassword.fill('123Abcd123');

          const registerButton=page.getByRole('button',{name:'Register'});
          await expect(registerButton).toBeVisible();
          await expect(registerButton).toBeDisabled();
        });

        test('Check that the button is not clickable,all fields are filled in correctly, except for the re-password field',async({page})=>{
          const inputName=page.locator('[name="name"]');
          await inputName.fill('Greta');

          const inputLastName=page.locator('[name="lastName"]');
          await inputLastName.fill('Thunberg');

          const inputEmail=page.locator( '#signupEmail');
          await inputEmail.fill('aqa-Greta-Thunberg@gmail.com');

          const inputPassword=page.locator('#signupPassword');
          await inputPassword.fill('123Abcd123');

          const inputReEnterPassword=page.locator('#signupRepeatPassword');
          await inputReEnterPassword.focus();
          await inputReEnterPassword.blur();

          const registerButton=page.getByRole('button',{name:'Register'});
          await expect(registerButton).toBeVisible();
          await expect(registerButton).toBeDisabled();
        });



});

// test.describe('Check the availability of the button when entering all fields with correct data',async()=>{
//                const registerButton=page.getByRole('button',{name:'Register'});
 //               await expect(registerButton).toBeVisible();
//                await expect(registerButton).toBeEnabled();
 //               await registerButton.click();