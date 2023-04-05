import { ACMEBankPage } from '../pages/acme-bank'

describe('ACME Bank', () => {

  const page = new ACMEBankPage()

  beforeEach(() => {
    cy.eyesOpen(
      {
        appName: 'ACME Bank',
        batchName: 'Eyes Demo: Example Bank App',
        testName: Cypress.currentTest.title,
        browser: [
          { name: 'chrome', width: 1024, height: 768 },
          //{name: 'chrome', width: 800, height: 600},
          //{name: 'firefox', width: 1024, height: 768},
          //{deviceName: 'iPhone X'},
        ]
      }
    )

    page.visit()

  })

  it('should log in to the Main page', () => {
    cy.eyesCheckWindow('Login page')

    // Perform login.
    page.login('valid-username', 'valid-password')

    cy.eyesCheckWindow('Main page')
  })

  afterEach(() => cy.eyesClose());

  after(() => {
    // Implicitly closes the Eyes Batch.
    // Unless you set APPLITOOLS_DONT_CLOSE_BATCHES env var to true
    cy.eyesGetAllTestResults().then(summary => {
      console.log(summary)
    })
  })

})