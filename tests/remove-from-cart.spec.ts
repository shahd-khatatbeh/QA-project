import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import dotenv from 'dotenv';
dotenv.config();

test('Remove item from cart', async ({ page }) => {
  const login = new LoginPage(page);
  const product = new ProductPage(page);
  const cart = new CartPage(page);

  await login.goto();
  await login.login(process.env.LOGIN_USER!, process.env.LOGIN_PASS!);
  await product.addToCart('Sauce Labs Backpack');
  await product.goToCart();
  await cart.removeItemByName('Sauce Labs Backpack');
  await expect(page.locator('.cart_item')).toHaveCount(0);


  
});
