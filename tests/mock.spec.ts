import { test, expect } from '@playwright/test';

test ('Mock the name in a profile',async ({page})=>{
    await page.route('**/api/users/profile', async route=>{
        await route.fulfill({
            status:200,
            contentType:'application/json',
            body: JSON.stringify({
                status:'ok',
                data:{
                    userId: 189201,
                    photoFilename: 'default-user.png',
                    name: "Nikola",
                    lastName: "Tesla"
                }
            }),
    });
});
await page.goto('https://qauto.forstudy.space/panel/profile');

const nameLocator = page.locator('.profile_name.display-4');
await expect(nameLocator).toHaveText('Nikola Tesla');
    
});