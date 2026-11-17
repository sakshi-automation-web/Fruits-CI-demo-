// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './Practice',
timeout: 50*1000,
workers : 10,
//retries :1,
expect: {
  timeout: 10000,
},
  reporter: [
    ['html'],
    ['allure-playwright']
  ],
 use: {
    browserName : 'chromium',
   headless : false,
   screenshot:'on',
   trace: 'on',
    //viewport: { width: 1700, height: 1080 },
   // ...devices['iPhone 13 Pro'],
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',
  },


});

