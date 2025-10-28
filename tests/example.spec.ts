import { test, expect } from "../baseTest";
import people from "../data/people.json";
test('Book a flight From Paris to Berlin for Snesko Belic', async ({ welcomePage, flightsListPage, flightDetailsPage, confirmationPage }) => {
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

});


test('Book a flight From Boston to Cairo for John Doe', async ({ welcomePage, flightsListPage, flightDetailsPage, confirmationPage }) => {
  await welcomePage.goto();
  await welcomePage.waitForPageToLoad();
  await welcomePage.selectStartingPointBoston();
  await welcomePage.selectDestinationCairo();
  await welcomePage.clickFindFlights();
  await flightsListPage.waitForPageToLoad();
  expect(await flightsListPage.getPageTitle()).toBe("Flights from Boston to Cairo: ");
  await flightsListPage.selectAflight();
  await flightDetailsPage.fillName(people.johnDoe.name);
  await flightDetailsPage.fillAddress(people.johnDoe.address);
  await flightDetailsPage.fillCity(people.johnDoe.city);
  await flightDetailsPage.fillState(people.johnDoe.state);
  await flightDetailsPage.fillZipCode(people.johnDoe.zipCode);
  await flightDetailsPage.selectAmexType();
  await flightDetailsPage.fillCreditCardNumber(people.johnDoe.cardNumber);
  await flightDetailsPage.fillCardMonth(people.johnDoe.expirationMonth);
  await flightDetailsPage.fillCardYear(people.johnDoe.espirationYear);
  await flightDetailsPage.fillNameOnCard(people.johnDoe.nameOnCard);
  await flightDetailsPage.purchaseFlight();
  expect(await confirmationPage.getPageTitle()).toBe("Thank you for your purchase today!");

});

