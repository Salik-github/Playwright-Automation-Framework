import { test as base, expect } from '@playwright/test';
import { BasePage } from './Page/BasePage';
import { LoginPage } from './Page/LoginPage';

export const test = base.extend({
  // mainUrl: async ({ page }, use) => {
  //   await page.goto('https://practice.expandtesting.com/inputs');
  //   await use(page);
  // },
  BasePage: async ({ page }, use) => {
    const BasePage = new BasePage(page)
    await use(loginpage)
  },
  loginpage: async ({ page }, use) => {
    const loginpage = new LoginPage(page)
    await use(loginpage)
  }
});

export { expect };