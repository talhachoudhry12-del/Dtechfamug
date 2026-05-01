import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 60000,

  expect: {
    timeout: 10000,
  },

  fullyParallel: true,

  retries: 1,

  reporter: [['html'], ['list']],

  use: {
    headless: false,

    // ✅ your required settings
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',

    actionTimeout: 0,
    navigationTimeout: 30000,
  },

  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' }
    }
  ],
});