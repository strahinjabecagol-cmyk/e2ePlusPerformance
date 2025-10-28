import { Page } from "@playwright/test";

async function helloWorld(page: Page) {
    await page.goto('https://www.artillery.io/');
    await page.click('text=Docs');
}

export { helloWorld };