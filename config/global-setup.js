import { chromium } from "@playwright/test";
import { CONFIG } from "./config.js";

//Logs in once before the test suite runs
async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(CONFIG.UI_BASE_URL);
  await page.fill("#username", CONFIG.CREDENTIALS.USERNAME);
  await page.fill("#password", CONFIG.CREDENTIALS.PASSWORD);
  await page.click("#login");

  await page.context().storageState({ path: "playwright/.auth/user.json" });
  await browser.close();
}

export default globalSetup;
