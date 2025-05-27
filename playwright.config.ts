import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
 // timeout: 0,
  use: {
    headless: false, 
    viewport: { width: 1280, height: 720 },

  },
  projects: [
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    }
  ],
});
