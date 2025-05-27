import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  // Add a product by its name
  async addToCart(itemName: string) {
    const locator = this.page.locator(`.inventory_item:has-text("${itemName}") button`);

    await locator.first().click();
    // I use "first" because there might be more than one product with the same name,
    // and I only want to add the first one
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }

  async removeItemByName(itemName: string) {
    const locator = this.page.locator(`.cart_item:has-text("${itemName}") button`);
    await locator.first().click();
  }
}

