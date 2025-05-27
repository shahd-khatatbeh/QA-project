import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  // Start the checkout process
  async startCheckout() {
    await this.page.click('button:has-text("Checkout")');
  }

  // I use IDs to fill in the form
  async fillInformation(firstName: string, lastName: string, zip: string) {
    await this.page.fill('#first-name', firstName);
    await this.page.fill('#last-name', lastName);
    await this.page.fill('#postal-code', zip);
    
    await this.page.click('[data-test="continue"]');
  }

  // Finish the checkout
  async finishCheckout() {
    await this.page.click('#finish');
  }

  // Check if the checkout is complete
  async isCheckoutComplete(): Promise<boolean> {
    return await this.page.isVisible('.complete-header');
  }
}
