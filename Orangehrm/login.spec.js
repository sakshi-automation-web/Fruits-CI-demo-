
const { test, expect } = require('@playwright/test');
test('login test cases',async ({browser})=>{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await page.locator("//input[@placeholder='Username']").fill("Admin");
await page.locator("//input[@placeholder='Password']").fill("admin123");
await page.getByRole("button",{name:"Login"}).click();
await expect(page).toHaveTitle("OrangeHRM");
//await page.evaluate(()=>window.scrollBy(0,500));
await page.locator(".oxd-text.oxd-text--p.orangehrm-buzz-widget-header-time").first().click();
await page.waitForSelector('body');
await page.evaluate(() => window.scrollBy(0, document.body.scrollHeight));
await page.evaluate(() => window.scrollBy(document.body.scrollWidth,0));
await page.getByText("Admin").click();
await page.setDefaultTimeout(5000);
await page.locator('.oxd-input.oxd-input--active').fill('Admin');
//await page.locator(".oxd-select-text-input").first().selectOption("Admin");
await page.getByRole("option", { name: "Admin" }).click();


});