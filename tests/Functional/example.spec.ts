import { test, expect } from '@playwright/test'

test('Simple Basic test', async({ page }) =>{
    //here goues the test code
    await page.goto('https://www.example.com')
    const pageTitle = await page.locator('h1')
    await expect(pageTitle).toContainText('Example Domain')

})


test('Clicking Basic test', async({ page }) =>{
    //here goues the test code
    await page.goto('http://zero.webappsecurity.com/')
    await page.click('#signin_button')
    await page.click('text=Sign in')

    const errorMessage = await page.locator('.alert-error')
    await expect(errorMessage).toContainText('Login and/or password are wrong.')

})

