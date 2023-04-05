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
          /*{ name: 'chrome', width: 800, height: 600 },
          { name: 'firefox', width: 1024, height: 768 },
          { deviceName: 'iPhone X' },*/
        ]
      }
    )

    page.visit()

  })

  it('should log in to the Main page', () => {

    cy.eyesCheckWindow({
      tag: 'Login page',
      ignore: { selector: 'div.logo-w img', padding: { top: 30, right: 5, bottom: 5, left: 10 } },
      ignoreColors: [
        { selector: '#log-in', padding: 5 },
      ],
      floating: {
        selector: 'label.form-check-label',
        maxUpOffset: 5,
        maxDownOffset: 5,
        maxLeftOffset: 10,
        maxRightOffset: 30
      }
    })

    // Perform login.
    page.login('valid-username', 'valid-password')

    /*cy.eyesCheckWindow({
      tag: 'Main page',
      matchLevel: 'Layout'
    })*/

    cy.eyesCheckWindow({
      tag: 'Main page',
      scriptHooks: {
        //beforeCaptureScreenshot: "document.querySelector('.element-actions a:nth-child(1)').style.display='none';"
        beforeCaptureScreenshot: "document.querySelector('.element-actions a:nth-child(1)').style.display='none'; document.querySelector('.top-bar').style.backgroundColor='red';"
      },
      layout: {
        selector: '#time'
      },
      ignoreColors: {
        selector: 'div.element-actions',
        padding: { top: 10, bottom: 10 }
      }
    })

    cy.eyesCheckWindow({
      tag: 'Transaction table',
      target: 'region',
      selector: 'div.table-responsive'
    })

    cy.get('div.element-actions')
      .should('be.visible')
      .then($el => {
        cy.eyesCheckWindow({
          tag: 'Action Buttons',
          target: 'region',
          element: $el
        })
      })
  })

  afterEach(() => cy.eyesClose());

  after(() => {
    cy.eyesGetAllTestResults().then(summary => {
      console.log(summary)
    })
  })

})