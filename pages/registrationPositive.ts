import { Page , Locator } from '@playwright/test';

export class registrationForm{
     page: Page;
     nameInput: Locator;
     lastNameInput: Locator;
     emailInput: Locator;
     passwordInput: Locator;
     repeatPasswordInput: Locator;
     registerButton: Locator;

    constructor(page:Page){
        this.page = page;
        this.nameInput = page.locator('[name="name"]');
        this.lastNameInput = page.locator('[name="lastName"]');
        this.emailInput = page.locator('#signupEmail');
        this.passwordInput = page.locator('#signupPassword');
        this.repeatPasswordInput = page.locator('#signupRepeatPassword');
        this.registerButton = page.getByRole('button', { name: 'Register' });
    }

    async fillRegistrationForm(name:string,lastName:string,email:string,password:string,repassword:string){
        await this.nameInput.fill(name);
        await this.lastNameInput.fill(lastName);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.repeatPasswordInput.fill(repassword);
    }

    async submitRegistration(){
        await this.registerButton.click();
    }
}