# cypress

E2E tests written with [cypress.io](https://cypress.io).

## Running tests

To open Cypress in development mode with UI:


´´´sh
npm run open
´´´

To run ALL tests in headless mode (suitable for Docker):

´´´sh
npm test
´´´
To run a specific test in headless mode (suitable for Docker):
npm test -- --spec=cypress/integration/test file name

´´´sh
npm run ci
´´´