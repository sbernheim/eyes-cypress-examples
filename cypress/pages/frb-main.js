export const URL = 'https://www.federalreserve.gov'
export class FederalReserveMainPage {

  menuBarSelector = 'ul.navbar-nav[role=menubar]'
  menuItemSelector = `${this.menuBarSelector} > li[role=menuitem] > a#`

  visit() {
    this.url = URL
    cy.visit(this.url)
  }

  scrollToMenuBar() {
    cy.get('ul.navbar-nav[role=menubar]').as('menuBar').scrollIntoView()
  }

  menuItems() {
    return [
      'aboutMenu',
      'newsMenu',
      'monetaryMenu',
      'supervisionMenu',
      'stabilityMenu',
      'paymentMenu',
      'econMenu',
      'dataMenu',
      'consumerMenu'
    ]
  }

  displayMenuBarItem(id) {
    cy.get(`ul.navbar-nav[role=menubar] > li[role=menuitem] > a#${id}`).as(`${id}`).parent().realHover()
  }

}