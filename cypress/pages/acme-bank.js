export class ACMEBankPage {

  visit() {
    cy.visit(Cypress.env('ADD_DIFFS') ? '/index_v2.html' : "/")
  }

  login(username, password) {
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('#log-in').click()
  }

}