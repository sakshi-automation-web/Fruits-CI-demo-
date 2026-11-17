const { test } = require('@playwright/test');

//const { title } = require('node:process');
test ('First playwright test case', async ({browser}) =>
{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
console.log(await page.title());
// await expect(page).toHaveTitle("Google");
/*await page.locator("#username").fill("diganta.mallik.ext@revvity.com.projfull");
await page.locator("[value='Log In to Sandbox']").click();
await page.locator("[type='password']").fill("revvityprojful@1234");
await page.locator("[value='Log In to Sandbox']").click();
console.log (await page.locator("[style*='block']").textContent());
*/
});

/*test.only('Second playwright test case ', async ({page}) => {
await page.goto('https://google.com');
});*/

