export class ShiftingMenuPage {

  visit() {
    cy.visit('https://the-internet.herokuapp.com/shifting_content/menu?mode=random')
  }

  hoverOverMenuElement(index = 0) {
    cy.get('.example ul li').eq(index).realHover();
  }

}