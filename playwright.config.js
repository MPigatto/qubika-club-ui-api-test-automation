// @ts-check
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",

  use: {
    trace: "on-first-retry",
  },

  projects: [
    // API tests (no browser)
    {
      name: "api",
      testMatch: /api\/.*\.spec\.js/,
      use: {
        baseURL: process.env.API_BASE_URL,
      },
    },

    // UI tests - Chromium
    {
      name: "ui-chromium",
      testMatch: /ui\/.*\.spec\.js/,
      use: {
        ...devices["Desktop Chrome"],
        baseURL: process.env.UI_BASE_URL,
      },
    },
  ],
});
