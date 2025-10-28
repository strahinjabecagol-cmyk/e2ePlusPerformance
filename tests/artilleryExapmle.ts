import { Page } from '@playwright/test';
import { type Config, type Scenario } from 'artillery';
import { helloWorld } from './artilleryComands/processor';

export const config: Config = {
    target: 'https://www.artillery.io',
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
        {
            name: "pause",
            pause: 5
        },
        {
            name: "rampUp",
            duration: 10,
            arrivalRate: 5,
            rampTo: 5
        },
        {
            name: "fixedArrival",
            duration: 10,
            arrivalRate: 5
        }


    ]
};

export const scenarios: Scenario[] = [{
    engine: 'playwright',
    testFunction: helloWorld
}];

