import { Page } from '@playwright/test';
import { type Config, type Scenario as BaseScenario } from 'artillery';
import { createFlightForSneskoBelic } from './artilleryComands/processor';

interface Scenario extends BaseScenario {
  custom?: Record<string, any>;
}

export const config: Config = {
    target: 'https://blazedemo.com/',
    engines: {
        playwright: {
            // Enable Playwright trace recording
            // Requires an Artillery Cloud account for viewing traces:
            // https://www.artillery.io/docs/get-started/get-artillery#set-up-cloud-reporting
            trace: true,
            launchOptions: {
                headless: true
            },
            contextOptions: {
                timeout: 60000
            }
        }
    },
    statsInterval: 10,
    phases: [
        //injects one user every second for 10 seconds
        {
            name: "constantArrival",
            duration: 10,
            arrivalRate: 1
        },
        // {
        //     name: "pause",
        //     pause: 5
        // },
        // {
        //     name: "rampUp",
        //     duration: 10,
        //     arrivalRate: 5,
        //     rampTo: 5
        // },
        // {
        //     name: "fixedArrival",
        //     duration: 10,
        //     arrivalRate: 5
        // }


    ]
};

export const scenarios: Scenario[] = [{
    name: 'Create Flight For Snesko Belic',
    engine: 'playwright',
    custom: {
        testName: 'Create_Flight_For_Snesko_Belic'
    },
    testFunction: createFlightForSneskoBelic
}];

