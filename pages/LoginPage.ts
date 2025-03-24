import { Page , Locator } from '@playwright/test';

export class LoginPage{
    page:Page;
    emailInput:Locator;
    passwordInput:Locator;
    signInButton:Locator;
    loginButton:Locator;

    constructor(page:Page){
        this.page=page;
        this.emailInput=page.locator('#signinEmail');
        this.passwordInput=page.locator('#signinPassword');
        this.signInButton=page.getByRole('button',{name:'Sign In'});
        this.loginButton=page.getByRole('button', {name:'Login'});
    }

    async openLoginForm(){
        await this.page.goto('https://qauto.forstudy.space/');
        await this.signInButton.click();
    }

    async fillLogInForm(email:string,password:string){
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
    }

    async submitLogin(){
        await this.loginButton.click();
    }

    async saveStorageState(){
        await this.page.context().storageState({ path: 'storageState.json' });

    }

}