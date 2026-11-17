//const {test, expect} = require('@playwright/test');

/*test ('First url',async ({browser}) =>
{
 
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

}); */
 //2nd code
/*const { test, expect } = require('@playwright/test');

test('First url', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

  // Log the actual title
  const title = await page.title();
  console.log("Page title is:", title);

  // Assert against the real title
 // await expect(page).toHaveTitle("Let's Shop");
  await page.locator("#userEmail").fill("sakshigulhane123@gmail.com");
  await page.locator("#userPassword").fill("Sakshi@123");
  await page.locator("#login").click();
  //waitForloadstate means wait till page is load networkidle network comes to ideal state
  await page.waitForLoadState("networkidle");
  //waitfor means wait until variable are loaded
  //waitfor return runs when you can right single element (eg- #login)
  page.locator('.card-body b').first().waitFor();
  const titles = await page.locator('.card-body b').allTextContents();
  console.log("Print all titles", titles);
});*/

//3rd Code 
/* test.only('login page', async ({page}) =>{

  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await page.locator("#username").fill("rahulshettyacademy");
  await page.locator('[name="password"]').fill("Learning@830$3mK2");
  const dropdown = await page.locator("select.form-control");
dropdown.selectOption("consult");
await page.locator(".radiotextsty").last().click();
await page.locator("#okayBtn").click();
console.log(await page.locator(".radiotextsty").last().isChecked());
expect(await page.locator(".radiotextsty").last()).toBeChecked();
await page.locator("#terms").check();
await expect(page.locator("#terms")).toBeChecked();
 await page.locator('[value="Sign In"]').click();

//await page.locator("#terms").uncheck();
const documentLink = page.locator("[href*='documents-request']");
await expect(documentLink).toHaveAttribute("class","blinkingText");

}
)*/
//4th code 
const {test, expect} = require('@playwright/test');
test.only('child handling page', async ({browser})=>{
 const context =  await browser.newContext();
 const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const documentLink = page.locator("[href*='documents-request']");
//await expect(documentLink).toHaveAttribute("class","blinkingText");
const [newPage] = await Promise.all([

context.waitForEvent('page'),
documentLink.click(),
]);
const text = await newPage.locator(".red").textContent();
console.log(text);
const arraytext =  text.split("@");
const domain = arraytext[1].split(" ")[0];
await page.locator("#username").fill(domain);
await page.pause();
console.log(await page.locator("#username").textContent());

});






