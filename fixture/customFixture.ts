import {test as base,Page} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export const test=base.extend<{userGaragePage:Page}>

({
   userGaragePage : async({page},use)=>{
        const userGaragePage=new LoginPage(page);
        await userGaragePage.openLoginForm();
        await userGaragePage.fillLogInForm('aqa-Greta-Thunberg@gmail.com','123Abcd123');
        await userGaragePage.submitLogin();
        await userGaragePage.saveStorageState();

      console.log('1111');

       await use(page);
    },

})
export const expect = test.expect;

    

