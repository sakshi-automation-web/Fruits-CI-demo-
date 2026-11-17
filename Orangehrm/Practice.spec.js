const {test}= require('@playwright/test');

test('swtiching tab ', async ({browser})=>{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://www.google.com");

const[newPage] = await Promise.all([
  context.waitForEvent("page"),
  page.evaluate(()=>
    window.open("https://rahulshettyacademy.com/client/#/auth/login")),
]);
await page.waitForLoadState();
const [rahulpage] = await Promise.all([
  context.waitForEvent("page"),
  page.evaluate(()=>
    window.open("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
),

]);
await page.waitForLoadState();
 await rahulpage.bringToFront(); 
});



 test.only('login page', async ({page}) =>{

  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await page.locator("#username").fill("rahulshettyacademy");
  await page.locator('[name="password"]').fill("Learning@830$3mK2");
  const dropdown = await page.locator("select.form-control");
dropdown.selectOption("consult");
await page.locator(".radiotextsty").last().click();
await page.locator("#okayBtn").click();});