export class ShiftingImagePage {

  visit() {
    cy.visit('https://the-internet.herokuapp.com/shifting_content/image?mode=random&pixel_shift=100')
  }

}