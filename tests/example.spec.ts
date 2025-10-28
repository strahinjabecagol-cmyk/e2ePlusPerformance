import { test, expect } from "../baseTest";

test('Book a flight From Paris to Berlin', async ({ welcomePage, flightsListPage, flightDetailsPage, confirmationPage }) => {
  await welcomePage.goto();
  await welcomePage.waitForPageToLoad();
  await welcomePage.selectStartingPointParis();
  await welcomePage.selectDestinationBerlin();
  await welcomePage.clickFindFlights();
  await flightsListPage.waitForPageToLoad();
  expect(await flightsListPage.getPageTitle()).toBe("Flights from Paris to Berlin: ");
  await flightsListPage.selectAflight();
  await flightDetailsPage.fillName('Snesko');
  await flightDetailsPage.fillAddress('coldStreet 999');
  await flightDetailsPage.fillCity('cold town');
  await flightDetailsPage.fillState('cold state');
  await flightDetailsPage.fillZipCode('9999');
  await flightDetailsPage.selectAmexType();
  await flightDetailsPage.fillCreditCardNumber('12345678909876');
  await flightDetailsPage.fillCardMonth('12');
  await flightDetailsPage.fillCardYear('2029');
  await flightDetailsPage.fillName('Snesko Belic');
  await flightDetailsPage.purchaseFlight();
  expect(await confirmationPage.getPageTitle()).toBe("Thank you for your purchase today!");

});


test('Book a flight From Boston to Cairo', async ({ welcomePage, flightsListPage, flightDetailsPage, confirmationPage }) => {

  await welcomePage.goto();
  await welcomePage.waitForPageToLoad();
  await welcomePage.selectStartingPointBoston();
  await welcomePage.selectDestinationCairo();
  await welcomePage.clickFindFlights();
  await flightsListPage.waitForPageToLoad();
  expect(await flightsListPage.getPageTitle()).toBe("Flights from Boston to Cairo: ");
  await flightsListPage.selectAflight();
  await flightDetailsPage.fillName('Snesko');
  await flightDetailsPage.fillAddress('coldStreet 999');
  await flightDetailsPage.fillCity('cold town');
  await flightDetailsPage.fillState('cold state');
  await flightDetailsPage.fillZipCode('9999');
  await flightDetailsPage.selectAmexType();
  await flightDetailsPage.fillCreditCardNumber('12345678909876');
  await flightDetailsPage.fillCardMonth('12');
  await flightDetailsPage.fillCardYear('2029');
  await flightDetailsPage.fillName('Snesko Belic');
  await flightDetailsPage.purchaseFlight();
  expect(await confirmationPage.getPageTitle()).toBe("Thank you for your purchase today!");


});

