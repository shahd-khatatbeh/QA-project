import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SortPage } from '../pages/SortPage';
import dotenv from 'dotenv';
dotenv.config();

test.describe('Sort Feature Group', () => {
  let loginPage: LoginPage;
  let sortPage: SortPage;

  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    loginPage = new LoginPage(page);
    sortPage = new SortPage(page);

    await loginPage.goto();
    await loginPage.login(process.env.LOGIN_USER!, process.env.LOGIN_PASS!);
    console.log('All sort tests start');
    
    // I keep a reference to the page so I can use it in all tests
    sortPage.page = page;
  });

  test('Sort A to Z', async () => {
    await sortPage.sortBy('az');
    await expect(sortPage.page.locator('.inventory_item')).toHaveCount(6);
  });

  test('Sort Price High to Low', async () => {
    await sortPage.sortBy('hilo');
    await expect(sortPage.page.locator('.inventory_item')).toHaveCount(6);
  });

  test.afterAll(async () => {
    console.log('All sort tests finished');
  });
});
