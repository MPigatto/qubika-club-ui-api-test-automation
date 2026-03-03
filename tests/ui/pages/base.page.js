export class BasePage {
  constructor(page) {
    this.page = page;
  }
  async navigate(url) {
    await this.page.goto(url);
  }

  async click(locator) {
    await this.page.locator(locator).click();
  }

  async fill(locator, value) {
    await this.page.locator(locator).fill(value);
  }

  async getText(locator) {
    return await this.page.locator(locator).textContent();
  }

  async waitForVisible(locator) {
    await this.page.locator(locator).waitFor({ state: "visible" });
  }
}
export default BasePage;
