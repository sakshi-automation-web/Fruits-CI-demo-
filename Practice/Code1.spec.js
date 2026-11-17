const {test,expect} =require ('@playwright/test');


test('HI apple', async ({browser})=>{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://www.apple.com/apple-homeview/');
await page.locator("a[data-globalnav-item-name='tv-home']").click();
 await page.getByRole('link', { name: 'Learn more, Apple HomeView' }).click();
  await page.getByRole('tab', { name: 'Siri AI' }).click();
  await page.getByRole('tab', { name: 'Multiuser' }).click();
  await page.getByRole('tab', { name: 'Audio and visuals' }).click();
  await page.getByRole('tab', { name: 'Ways to connect' }).click();
});