const {test, expect} = require("@playwright/test");

test('first test login', async ({browser})=>{
const Context = await browser.newContext();
const page = await Context.newPage();
await page.goto("https://eventhub.rahulshettyacademy.com/login");
await page.locator("#email").fill("testuser22@gmail.com");
await page.locator("#password").fill("Sakshi@123");
await page.locator("#login-btn").click({timeout:30_000});
 //await page.evaluate(() => window.scrollBy(0, 1000));
  //await page.waitForTimeout(1000);
await page.evaluate(() => window.scrollBy(0, 0));
  await page.getByText('EventHub').isVisible();
});
  // Get initial value
  /*let currentValue = Number(await quantityInput.inputValue());
  console.log('Initial value:', currentValue);

  // Click + button once
  await page.locator("//div[@class='flex items-center gap-3']//button[@type='button'][2]").click();
  currentValue = Number(await quantityInput.inputValue());
  console.log('After + click:', currentValue);

  // ✅ Conditional logic
  if (currentValue === 2) {
    console.log('Value is 2 — proceed with next process');
    // Example next step:
    await page.locator('button:has-text("+")').click();
  } else if (currentValue >= 3) {
    console.log('Value is 3 or more — decreasing to 2');
    // Keep clicking "-" until value becomes 2
    while (currentValue > 2) {
      await page.locator("//div[@class='flex items-center gap-3']//button[@type='button'][1]").click();
      currentValue = Number(await quantityInput.inputValue());
    }
    console.log('Value reduced to 2 — proceed with next process');
    await page.locator('button:has-text("-")').click();
  } else {
    console.log('Value is less than 2 — increasing to 2');
    while (currentValue < 2) {
      await page.locator('button:has-text("+")').click();
      currentValue = Number(await quantityInput.inputValue());
    }
    console.log('Value adjusted to 2 — proceed with next process');
    //await page.locator('text=Book Now').click();
  }
   */




