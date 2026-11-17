// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './Projectobjects',
  timeout: 50 * 1000,
  expect: { timeout: 10000 },
  reporter: 'html',
  projects: [
    {
      name: 'safari',
      use: {
        browserName: 'webkit',
        headless: false,
        screenshot: 'off',
        trace: 'on',
        ...devices['iPhone 13 Pro'], // iPhone 15 not available, use custom if needed
      },
    },
    {
      name: 'chromium-desktop',
      use: {
        browserName: 'chromium',
        headless: false,
        screenshot: 'on',
        video : 'retain-on-failure',
        trace: 'on',
        viewport: { width: 1500, height: 750 },
        //means any pop will come in google form in that time you use geolocation means any error will show in google page it will allow the directly 
        permissions : ['geolocation'],
      },
    },
  ],
});

