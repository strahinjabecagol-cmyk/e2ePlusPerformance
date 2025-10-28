import { Expect, Page } from "playwright/types/test";
import { BasePom } from "./base.pom";

export class FlightDetailsPage extends BasePom {



    constructor(page: Page, expect: Expect) {
        super(page, expect);
        this.url = 'https://blazedemo.com/purchase.php';

    }

    async getPageTitle() {
        return this.page.locator('h3').textContent();

    }

    async fillName(name: string) {
        await this.page.getByRole('textbox', { name: 'Name', exact: true }).fill(name);

    }

    async fillNameOnCard(name: string) {
        await this.page.getByRole('textbox', { name: 'Name on Card' }).fill(name);

    }


    async selectAmexType() {
            await this.page.locator('#cardType').selectOption('amex');
    }
    async fillZipCode(zipCode: string) {
        await this.page.getByRole('textbox', { name: 'Zip Code' }).fill(zipCode);
    }

    async fillState(state: string) {
        await this.page.getByRole('textbox', { name: 'State', exact: true }).fill(state);
    }

    async fillCity(city: string) {
        await this.page.getByRole('textbox', { name: 'City', exact: true }).fill(city);
    }

    async fillAddress(address: string) {
        await this.page.getByRole('textbox', { name: 'Address', exact: true }).fill(address);
    }

   async purchaseFlight() {
       await this.page.getByRole('button', { name: 'Purchase Flight', exact: true }).click();
   }

    async fillCardYear(year: string) {
        await this.page.getByRole('textbox', { name: 'Year' }).clear();
        await this.page.getByRole('textbox', { name: 'Year' }).fill(year);
    }

    async fillCardMonth(month: string) {
        await this.page.getByRole('textbox', { name: 'Month' }).clear();
        await this.page.getByRole('textbox', { name: 'Month' }).fill(month);
    }

    async fillCreditCardNumber(cardNumber: string) {
        await this.page.getByRole('textbox', { name: 'Credit Card Number', exact: true }).fill(cardNumber);
    }

    async selectCardType(cardType: string) {
        await this.page.getByRole('combobox', { name: 'Card Type', exact: true }).selectOption(cardType);

    }

}