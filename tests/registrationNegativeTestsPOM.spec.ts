import { test, expect } from '@playwright/test';
import { registrationForm } from '../pages/registrationPositive';

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
     const registrationPage=new registrationForm(page);
     await registrationPage.fillRegistrationForm('','','','',''); 
     await expect(page.getByText('Name required', { exact: true })).toBeVisible();
     await expect(registrationPage.nameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
   });

   test('Check length is less than 2 characters', async ({ page })=>{
     const registrationPage=new registrationForm(page);
     await registrationPage.fillRegistrationForm('A','','','',''); 
     await expect(page.getByText('Name has to be from 2 to 20 characters long', { exact: true })).toBeVisible();
     await expect(registrationPage.nameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
   });

   test('Check length is more than 20 characters', async ({ page })=>{
     const registrationPage=new registrationForm(page);
     await registrationPage.fillRegistrationForm('Aaaaaaaaaaaaaaaaaaaaa','','','',''); 
     await expect(page.getByText('Name has to be from 2 to 20 characters long', { exact: true })).toBeVisible();
     await expect(registrationPage.nameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
     });

   test('Check using the wrong data', async ({ page })=>{
     const registrationPage=new registrationForm(page);
     await registrationPage.fillRegistrationForm('@123','','','',''); 
     await expect(page.getByText('Name is invalid',{ exact: true })).toBeVisible();
     await expect(registrationPage.nameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
     });

   test('Check when using non-English letters', async ({ page })=>{
     const registrationPage=new registrationForm(page);
     await registrationPage.fillRegistrationForm('Ґрета','','','',''); 
     await expect(page.getByText('Name is invalid',{ exact: true })).toBeVisible();
     await expect(registrationPage.nameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
     });
});

test.describe('Check the field last name',()=>{
        test('Check the empty field', async ({ page })=>{
          const registrationPage=new registrationForm(page);
          await registrationPage.fillRegistrationForm('','','','',''); 
          await expect(page.getByText('Last name required')).toBeVisible();
          await expect(registrationPage.lastNameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        });
     
        test('Check length is less than 2 characters', async ({ page })=>{
          const registrationPage=new registrationForm(page);
          await registrationPage.fillRegistrationForm('','A','','',''); 
          await expect(page.getByText('Last name has to be from 2 to 20 characters long')).toBeVisible();
          await expect(registrationPage.lastNameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        });
     
        test('Check length is more than 20 characters', async ({ page })=>{
          const registrationPage=new registrationForm(page);
          await registrationPage.fillRegistrationForm('','Aaaaaaaaaaaaaaaaaaaaa','','',''); 
          await expect(page.getByText('Last name has to be from 2 to 20 characters long')).toBeVisible();
          await expect(registrationPage.lastNameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        });
     
        test('Check using the wrong data', async ({ page })=>{
          const registrationPage=new registrationForm(page);
          await registrationPage.fillRegistrationForm('','@123','','',''); 
          await expect(page.getByText('Last name is invalid')).toBeVisible();
          await expect(registrationPage.lastNameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        });
     
        test('Check when using non-English letters', async ({ page })=>{
          const registrationPage=new registrationForm(page);
          await registrationPage.fillRegistrationForm('','Тумберг','','',''); 
          await expect(page.getByText('Last name is invalid')).toBeVisible();
          await expect(registrationPage.lastNameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        });
});

test.describe('Check the field email',()=>{
     test('Check the empty field', async ({ page })=>{
          const registrationPage=new registrationForm(page);
          await registrationPage.fillRegistrationForm('','','','',''); 
          await expect(page.getByText('Email required')).toBeVisible();
          await expect(registrationPage.emailInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        });
     
     test('Check the email field using the wrong format = withot @ sign', async ({ page })=>{
          const registrationPage=new registrationForm(page);
          await registrationPage.fillRegistrationForm('','','aqa-Greta-Thunberggmail.com','',''); 
          await expect(page.getByText('Email is incorrect')).toBeVisible();
          await expect(registrationPage.emailInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        });

     test('Check the email field using the wrong format = withot .com part', async ({ page })=>{
          const registrationPage=new registrationForm(page);
          await registrationPage.fillRegistrationForm('','','aqa-Greta-Thunberg@gmail','',''); 
          await expect(page.getByText('Email is incorrect')).toBeVisible();
          await expect(registrationPage.emailInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
           });

     test('Check the email field using the wrong format = user forgot a point', async ({ page })=>{
          const registrationPage=new registrationForm(page);
          await registrationPage.fillRegistrationForm('','','aqa-Greta-Thunberg@gmailcom','',''); 
          await expect(page.getByText('Email is incorrect')).toBeVisible();
          await expect(registrationPage.emailInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
           });

     test('Check the email field using the wrong format = user add a number in the second part of email', async ({ page })=>{
          const registrationPage=new registrationForm(page);
          await registrationPage.fillRegistrationForm('','','aqa-Greta-Thunberg@gmail.com3','',''); 
          await expect(page.getByText('Email is incorrect')).toBeVisible();
          await expect(registrationPage.emailInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
           });
});

test.describe('Check the field password',()=>{
        test('Check the empty field', async ({ page })=>{
          const registrationPage=new registrationForm(page);
          await registrationPage.fillRegistrationForm('','','','',''); 
          await expect(page.getByText('Password required')).toBeVisible();
          await expect(registrationPage.passwordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        });
     
        test('Check length is less than 8 characters', async ({ page })=>{
          const registrationPage=new registrationForm(page);
          await registrationPage.fillRegistrationForm('','','','123Abcd',''); 
          await expect(page.getByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')).toBeVisible();
          await expect(registrationPage.passwordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        });
     
        test('Check length is more than 15 characters', async ({ page })=>{
          const registrationPage=new registrationForm(page);
          await registrationPage.fillRegistrationForm('','','','123Abcd123Abcd123',''); 
          await expect(page.getByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')).toBeVisible();
          await expect(registrationPage.passwordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        });
     
        test('Check the test with a length from 8 to 15 min 1 capital letter and 1 small letter', async ({ page })=>{
          const registrationPage=new registrationForm(page);
          await registrationPage.fillRegistrationForm('','','','AbcdAbcd',''); 
          await expect(page.getByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')).toBeVisible();
          await expect(registrationPage.passwordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        });

        test('Check the test with a length from 8 to 15 min 1 integer and 1 small letter', async ({ page })=>{
          const registrationPage=new registrationForm(page);
          await registrationPage.fillRegistrationForm('','','','bcd123bcd',''); 
          await expect(page.getByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')).toBeVisible();
          await expect(registrationPage.passwordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        });

        test('Check the test with a length from 8 to 15 min 1 integer and 1 capital letter', async ({ page })=>{
          const registrationPage=new registrationForm(page);
          await registrationPage.fillRegistrationForm('','','','123ABC123',''); 
          await expect(page.getByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')).toBeVisible();
          await expect(registrationPage.passwordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        });
});

test.describe('Check the field re-enter password',()=>{
        test('Check the empty field', async ({ page })=>{
          const registrationPage=new registrationForm(page);
          await registrationPage.fillRegistrationForm('','','','',''); 
          await registrationPage.repeatPasswordInput.blur();
          await expect(page.getByText('Re-enter password required')).toBeVisible();
          await expect(registrationPage.repeatPasswordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        });
     
        test('Check if the passwords do not match', async ({ page })=>{
          const registrationPage=new registrationForm(page);
          await registrationPage.fillRegistrationForm('','','','AbcdAbc123','Abcdbc23'); 
          await registrationPage.repeatPasswordInput.blur();
          await expect(page.getByText('Passwords do not match')).toBeVisible();
          await expect(registrationPage.repeatPasswordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)');
        });
});
test.describe('Check the button Register',()=>{
        test('Check that the button is not clickable,all fields are filled in correctly, except for the name field',async({page})=>{
          const registrationPage=new registrationForm(page);
          await registrationPage.fillRegistrationForm('','Thunberg','aqa-Greta-Thunberg@gmail.com','123Abcd123','123Abcd123'); 
          await expect (registrationPage.registerButton).toBeVisible();
          await expect(registrationPage.registerButton).toBeDisabled();
        });

        test('Check that the button is not clickable,all fields are filled in correctly, except for the last name field',async({page})=>{
          const registrationPage=new registrationForm(page);
          await registrationPage.fillRegistrationForm('Greta','','aqa-Greta-Thunberg@gmail.com','123Abcd123','123Abcd123'); 
          await expect (registrationPage.registerButton).toBeVisible();
          await expect(registrationPage.registerButton).toBeDisabled();
        });

        test('Check that the button is not clickable,all fields are filled in correctly, except for the email field',async({page})=>{
          const registrationPage=new registrationForm(page);
          await registrationPage.fillRegistrationForm('Greta','Thunberg','','123Abcd123','123Abcd123'); 
          await expect (registrationPage.registerButton).toBeVisible();
          await expect(registrationPage.registerButton).toBeDisabled();
        });

        test('Check that the button is not clickable,all fields are filled in correctly, except for the password field',async({page})=>{
          const registrationPage=new registrationForm(page);
          await registrationPage.fillRegistrationForm('Greta','Thunberg','aqa-Greta-Thunberg@gmail.com','','123Abcd123'); 
          await expect (registrationPage.registerButton).toBeVisible();
          await expect(registrationPage.registerButton).toBeDisabled();
        });

        test('Check that the button is not clickable,all fields are filled in correctly, except for the re-password field',async({page})=>{
          const registrationPage=new registrationForm(page);
          await registrationPage.fillRegistrationForm('Greta','Thunberg','aqa-Greta-Thunberg@gmail.com','123Abcd123',''); 
          await expect (registrationPage.registerButton).toBeVisible();
          await expect(registrationPage.registerButton).toBeDisabled();
        });



});
