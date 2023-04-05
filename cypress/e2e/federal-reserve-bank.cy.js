import { FederalReserveMainPage } from '../pages/frb-main'
import { AboutTheFedPage } from '../pages/frb-about-the-fed'

describe('Federal Reserve Bank Web Demo', () => {

  describe('Main', () => {

    describe('Main Page', () => {

      var page = new FederalReserveMainPage()

      beforeEach(() => {
        page.visit()
      })

      it('should display navigation mouse-over menus', () => {
        cy.eyesCheckWindow({
          tag: 'Main Page',
          fully: true
        })

        page.scrollToMenuBar()

        page.menuItems().forEach((id) => {
          page.displayMenuBarItem(id)
          cy.eyesCheckWindow({
            tag: `Nav Menu ${id} Displayed`,
            fully: false
          })
        })
      })

      it('should keep the menu bar at the top', () => {
        cy.scrollTo('top')

        cy.eyesCheckWindow({
          tag: 'Top',
          fully: false
        })

        cy.get('h2:contains("Recent Developments")').scrollIntoView({ offset: { top: 50, left: 0 } })

        cy.eyesCheckWindow({
          tag: 'First Section',
          fully: false
        })
  
        cy.scrollTo('0%', '50%')
  
        cy.eyesCheckWindow({
          tag: 'Middle',
          fully: false
        })
  
        cy.scrollTo('bottom')
  
        cy.eyesCheckWindow({
          tag: 'Bottom',
          fully: false
        })

      })
    })
  })

  describe('About', () => {
    describe('About The Fed', () => {

      var page = new AboutTheFedPage()

      beforeEach(() => {
        cy.log(`Visiting page ${page.url}`)
        page.visit()
      })

      it('should render the About the Fed page', () => {
        cy.log('Checking the page')
        cy.eyesCheckWindow('About the Fed')
      
        cy.get('html > ')
      })

    })
  })
})

beforeEach(() => {
  cy.log('Opening Eyes')
  var titlePath = Cypress.currentTest.titlePath
  var props = [{ name: 'Section', value: titlePath.at(1)}, {name: 'Page', value: titlePath.at(2) }]
  cy.eyesOpen(
    {
      appName: 'Federal Reserve',
      batchName: titlePath.at(0),
      testName: Cypress.currentTest.title,
      properties: props,
      browser: [
        //{ name: 'chrome', width: 1440, height: 800 },
        { name: 'chrome', width: 1024, height: 768 },
        /*{ name: 'chrome', width: 800, height: 600 },
        { name: 'chrome', width: 750, height: 600 },
        //{ name: 'safari', width: 6144, height: 3160 },
        //{name: 'firefox', width: 1024, height: 768},
        {deviceName: 'Laptop with HiDPI screen'},
        {deviceName: 'iPhone XR'},
        {deviceName: 'iPad Pro'},
        {deviceName: 'iPad Mini'},
        {deviceName: 'Pixel 4'},
        {deviceName: 'Pixel 4 XL'},
        {deviceName: 'Pixel 5'}*/
      ],
      //layoutBreakpoints: [767, 991, 1200, 1440, 6144]
      layoutBreakpoints: true
    }
  )

})

afterEach(() => {
  cy.log('Closing Eyes')
  cy.eyesClose()
})

after(() => {
  // Implicitly closes the Eyes Batch.
  // Unless you set APPLITOOLS_DONT_CLOSE_BATCHES env var to true
  cy.log('Getting Eyes Results')
  cy.eyesGetAllTestResults().then(summary => {
    console.log(summary)
  })
})
