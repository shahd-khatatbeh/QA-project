import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import dotenv from 'dotenv';
dotenv.config();

test('Add product to cart', async ({ page }) => {
  const login = new LoginPage(page);
  const product = new ProductPage(page);
  await login.goto();
 
  await login.login(process.env.LOGIN_USER!, process.env.LOGIN_PASS!);
   
  await product.addToCart('Sauce Labs Backpack');
   
  await product.goToCart();
   //  await page.waitForTimeout(4000)
     

 
});
