
import {test,expect} from '../fixture/customFixture';

test ('Check successfull login', async ({userGaragePage})=>{
    await expect(userGaragePage).toHaveURL('https://qauto.forstudy.space/panel/garage');
})