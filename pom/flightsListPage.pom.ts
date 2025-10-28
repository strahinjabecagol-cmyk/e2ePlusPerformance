import { Expect, Page } from "playwright/types/test";
import { BasePom } from "./base.pom";

export class FlightsListPage extends BasePom {
    

    constructor(page: Page, expect: Expect) {
        super(page, expect);
        this.url = 'https://blazedemo.com/reserve.php';

    }

    async getPageTitle() {
        return this.page.locator('h3').textContent();

    }

    async selectAflight() {
      await this.page.getByRole('row', { name: 'Choose This Flight 12 Virgin' }).getByRole('button').click();

    }
}