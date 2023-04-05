export const URL = 'https://www.federalreserve.gov/aboutthefed.htm'
export class AboutTheFedPage {

  visit() {
    this.url = URL
    cy.visit(this.url)
  }

}