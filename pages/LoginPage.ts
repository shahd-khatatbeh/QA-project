import { Page } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config(); 

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
  await this.page.fill('[data-test="username"]', username);
 
  await this.page.fill('[data-test="password"]', password);
  
  await this.page.click('[data-test="login-button"]');
  
}

}
