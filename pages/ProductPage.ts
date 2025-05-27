import { Page } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  async addToCart(productName: string) {
  
    const product = this.page.locator(`.inventory_item:has-text("${productName}") button`);
    await product.waitFor({ state: 'visible' });
    await product.click();
  }

  async goToCart() {

    await this.page.click('.shopping_cart_link');
  }

}
