import { ShiftingImagePage } from '../pages/shifting-image'
import { ShiftingListPage } from '../pages/shifting-list'
import { ShiftingMenuPage } from '../pages/shifting-menu'

describe('testing a bunch of pages with shifting content', () => {

  const herokuAppName = 'Heroku Internet Site'

  beforeEach(() => {
    cy.eyesOpen(
      {
        appName: herokuAppName,
        batchName: herokuAppName + ' Test Batch',
        testName: Cypress.currentTest.title,
        browser: [
          { name: 'chrome', width: 1024, height: 768 },
          /* { name: 'edgechromium', width: 800, height: 600 },
          { name: 'firefox', width: 1024, height: 768 },
          { name: 'safari', width: 3008, height: 1692 },
          { deviceName: 'Pixel_4', screenOrientation: 'portrait' },
          { iosDeviceInfo: { deviceName: 'iPad Pro', screenOrientation: 'landscape' } } */
        ]
      }
    )

  })

  it('should validate a page with a shifting image', () => {

    const page = new ShiftingImagePage()

    page.visit()

    cy.eyesCheckWindow('Shifting image')

  })

  it('should validate a page with shifting list item content', () => {

    const page = new ShiftingListPage()

    page.visit()

    cy.eyesCheckWindow('List items with dynamic text')

  })

  it.skip('should hover over shifting menu items', () => {

    const page = new ShiftingMenuPage()

    page.visit()

    cy.eyesCheckWindow('Before hovering over shifting menu items')

    for (let i = 0; i < 5; i++) {
      page.hoverOverMenuElement(i)
      cy.eyesCheckWindow(`Hovering over shifting menu item ${i}`)
    }

  })

  afterEach(() => cy.eyesClose())

})