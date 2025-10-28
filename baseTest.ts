import { test as base, expect } from '@playwright/test';
import { WelcomePage } from './pom/welcomePage.pom';
import { FlightsListPage } from './pom/flightsListPage.pom';
import { FlightDetailsPage } from './pom/flightDetailsPage.pom';
import { ConfirmationPage } from './pom/confirmationpPage.pom';

// Extend the base test with custom fixtures
export const test = base.extend<{
    welcomePage: WelcomePage;
    flightsListPage: FlightsListPage;
    flightDetailsPage: FlightDetailsPage;
    confirmationPage: ConfirmationPage
}>({

    welcomePage: async ({ page }, use) => {
        await use(new WelcomePage(page, expect));
    },

    flightsListPage: async ({ page }, use) => {
        await use(new FlightsListPage(page, expect));
    },

    flightDetailsPage: async ({ page }, use) => {
        await use(new FlightDetailsPage(page, expect));
    },

    confirmationPage: async ({ page }, use) => {
        await use(new ConfirmationPage(page, expect));
    },

});

export { expect } from '@playwright/test';