import { Expect, Page } from "playwright/types/test";
import { BasePom } from "./base.pom";

export class ConfirmationPage extends BasePom {


    constructor(page: Page, expect: Expect) {
        super(page, expect);
        this.url = 'https://blazedemo.com/confirmation.php';
    }

   async getPageTitle() {
       return this.page.locator('h1').textContent();
       
   }
}