
import { Page, expect } from '@playwright/test';
import { WelcomePage } from "../../pom/welcomePage.pom";
import { FlightsListPage } from "../../pom/flightsListPage.pom";
import { FlightDetailsPage } from "../../pom/flightDetailsPage.pom";
import { ConfirmationPage } from "../../pom/confirmationpPage.pom";
import people from "../../data/people.json";

async function helloWorld({ page }: { page: Page }) {

    await page.goto('https://www.artillery.io/');
    await page.click('text=Docs');

}

async function createFlightForSneskoBelic({ page }: { page: Page }) {

    const welcomePage = new WelcomePage(page, expect);
    const flightsListPage = new FlightsListPage(page, expect);
    const flightDetailsPage = new FlightDetailsPage(page, expect);
    const confirmationPage = new ConfirmationPage(page, expect);

    await welcomePage.goto();
    await welcomePage.waitForPageToLoad();
    await welcomePage.selectStartingPointParis();
    await welcomePage.selectDestinationBerlin();
    await welcomePage.clickFindFlights();
    await flightsListPage.waitForPageToLoad();
    expect(await flightsListPage.getPageTitle()).toBe("Flights from Paris to Berlin: ");
    await flightsListPage.selectAflight();
    await flightDetailsPage.fillName(people.snesko.name);
    await flightDetailsPage.fillAddress(people.snesko.address);
    await flightDetailsPage.fillCity(people.snesko.city);
    await flightDetailsPage.fillState(people.snesko.state);
    await flightDetailsPage.fillZipCode(people.snesko.zipCode);
    await flightDetailsPage.selectAmexType();
    await flightDetailsPage.fillCreditCardNumber(people.snesko.cardNumber);
    await flightDetailsPage.fillCardMonth(people.snesko.expirationMonth);
    await flightDetailsPage.fillCardYear(people.snesko.espirationYear);
    await flightDetailsPage.fillNameOnCard(people.snesko.nameOnCard);
    await flightDetailsPage.purchaseFlight();
    expect(await confirmationPage.getPageTitle()).toBe("Thank you for your purchase today!");
}
export { helloWorld };