import {test,expect, Browser, Page} from '@playwright/test';
test('test from practice', async ({browser})=>{
    
    const context = await browser.newContext();
    const page:Page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    
    
    });