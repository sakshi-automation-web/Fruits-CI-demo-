import {test,expect,chromium} from '@playwright/test';
import { promises } from 'node:dns';
test('test from practice', async ({browser})=>{
    
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());
    await expect(page).toHaveTitle(/LoginPage Practise|Rahul Shetty Acadamy/);
    await page.getByLabel("Username").fill("rahulshettyacademy");
    await page.getByLabel("Password").fill("Learning@830$3mK2");
    await page.getByLabel("Admin").click();
    await page.locator('select.form-control').selectOption('teach');
    await page.locator('select.form-control').selectOption({ label: 'Consultant' });
    await page.getByText("Sign In").click();
    //await page.getByRole('button',{name:'Sign In'}).click();
   await page.screenshot({ path: 'tests/screenshots/login.png' });
   /*const link = page.locator("[href*='qa-career-accelerator-job-ready']");
await expect(link).toBeVisible();
await link.click();*/
   });
 test.only('child tab ', async ({browser})=>{
  const context= await browser.newContext();
  const page = await context.newPage();
  const docuemntlink = page.locator("[href*='documents-request']");
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const documentLink = page.locator("[href*='qa-career-accelerator-job-ready']");
  await expect(documentLink).toBeVisible();

  // Correct usage of Promise.all and waitForEvent
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),   // wait for new tab
    documentLink.click(),           // click triggers new tab
  ]);

  await newPage.waitForLoadState(); // ensure new tab is loaded
  console.log(await newPage.title());
});
    /*test('test new tab  practice', async ({page})=>{
        const document = page.locator("[href*='qa-career-accelerator-job-ready']");
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log(await page.title());
    await  expect(document).toHaveAttribute("class","blinkingText",{ timeout: 5000 });

    });*/
  
  test('Now I am searching new chromium',async ({browser})=>{
  const context = await browser.newContext();
  const page = await context.newPage();
  
  await page.goto("https://www.google.com");
  
  // Correct locator for Google search box
  //await page.locator('input[name="q"]').fill("Amazon");
     await page.getByRole('combobox', { name: 'Search' }).click();
  // Press Enter to search
  await page.getByRole('combobox', { name: 'Search' }).fill('Amazon');
  await page.keyboard.press('Enter');
  //await page.getByRole('Link',{name: 'Amazon.in | Great Prices'}).click();
});
