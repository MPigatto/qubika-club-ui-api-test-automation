import { defineConfig, devices } from "@playwright/test";
import { CONFIG } from "./config/config.js";

export default defineConfig({
  testDir: "./tests",

  reporter: "html",

  use: {
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },

  projects: [
    {
      name: "api",
      testMatch: /api\/.*\.spec\.js/,
      use: {
        baseURL: CONFIG.API_BASE_URL,
      },
    },
    {
      name: "ui-chromium",
      testMatch: /ui\/.*\.spec\.js/,
      use: {
        ...devices["Desktop Chrome"],
        baseURL: CONFIG.UI_BASE_URL,
        storageState: "playwright/.auth/user.json",
      },
    },
  ],

  globalSetup: "./config/global-setup.js",
});
