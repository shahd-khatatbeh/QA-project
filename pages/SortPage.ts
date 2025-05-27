import { Page } from '@playwright/test';
export class SortPage {
  constructor(public page: Page) {}

  async sortBy(value: string) {
    
    await this.page.selectOption('.product_sort_container', value);
    
  }
}
