import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import dotenv from 'dotenv';
dotenv.config();

test('Complete checkout process', async ({ page }) => {
  const login = new LoginPage(page);
  const product = new ProductPage(page);
  const checkout = new CheckoutPage(page);

  await login.goto();
  await login.login(process.env.LOGIN_USER!, process.env.LOGIN_PASS!);
  await product.addToCart('Sauce Labs Backpack');
  await product.goToCart();
  await checkout.startCheckout();
  await checkout.fillInformation('shahd', 'khatatbeh', '12345');
  await checkout.finishCheckout();
  

});
