import { Expect, Page } from "playwright/types/test";
import { BasePom } from "./base.pom";

export class WelcomePage extends BasePom {


    constructor(page: Page, expect: Expect) {
        super(page, expect);
        this.url = 'https://blazedemo.com/index.php';
    }
    async selectStartingPointParis() {
        await this.page.locator('select[name="fromPort"]').selectOption('Paris');

    }

    async selectDestinationBerlin() {
        await this.page.locator('select[name="toPort"]').selectOption('Berlin');

    }

    async clickFindFlights() {
        await this.page.getByRole('button', { name: 'Find Flights' }).click();
        
    }
}