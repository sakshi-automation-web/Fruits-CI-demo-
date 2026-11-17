//const { title } = require('node:process');
test ('First playwright test case', async ({browser}) =>
{
   const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto("https://rahulshettyacademy.com/angularpractice/");
   await page.getByLabel("Check me out if you Love IceCreams!").click();
   await page.getByLabel("Employed").click();
   await page.getByLabel("Gender").selectOption("Female");
   //getByRole 
   await page.getByRole("button",{name:'Submit'}).click();
   expect (await page.getByText("Success! The Form has been submitted successfully!.")).toBevisible();
   await page.getByRole("Link",{name:"Shop"}).click();
   await page.locator("app-card").filter({hasText: 'Nokia Edgs'}).getByrole("button").click()


});


