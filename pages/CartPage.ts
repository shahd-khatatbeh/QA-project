import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async removeItemByName(itemName: string) {
    const locator = this.page.locator(`.cart_item:has-text("${itemName}") button`);
    await locator.first().click();
  }
}

