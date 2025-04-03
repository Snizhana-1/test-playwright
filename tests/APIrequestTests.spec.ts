import { test, expect, request as playwrightRequest  } from '@playwright/test';


test('Successfully create a new car', async()=>{
    const baseURL = 'https://qauto.forstudy.space';
    const apiContext=await playwrightRequest.newContext();
    const loginResponse = await apiContext.post(`${baseURL}/api/auth/login`, {
        data: {
          email: 'aqa-Greta-Thunberg@gmail.com',
          password: '123Abcd123'
        }
      });
    expect(loginResponse.status()).toBe(200);
    const loginData = await loginResponse.json();
    const token = loginData.accessToken;

    const carResponse = await apiContext.post(`${baseURL}/api/cars`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        data: {
          carBrandId: 1,
          carModelId: 1,
          mileage: 122
        }
      });
    
      expect(carResponse.status()).toBe(200);
      const carData = await carResponse.json();
      expect(carData.status).toBe('ok');
      expect(carData.data.carBrandId).toBe(1);
      expect(carData.data.carModelId).toBe(1);
      expect(carData.data.initialMileage).toBe(122);    

    })