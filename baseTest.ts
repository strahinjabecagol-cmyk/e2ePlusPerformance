import { test as base, expect } from '@playwright/test';
//import { CalculatorPom } from './pom/calc/calcPage.pom';


// Extend the base test with custom fixtures
export const test = base.extend<{
    // calculatorPage: CalculatorPom;
    
}>({
    // calculatorPage: async ({ page }, use) => {
    //     await use(new CalculatorPom(page, expect));
    // },
    
});

export { expect } from '@playwright/test';