it.skip('should log in and validate a bunch of things', () => {
  // Open the login page
  cy.visit('http://localhost:8000/loginBefore.html')

  // Click on the login button
  cy.get('#log-in').click();

  // Assert the error text
  cy.get('#alert').should('have.text', 'Please enter username and password')

  // Assert that username field exists
  cy.get('#username').should('exist')

  // Assert username placeholder text
  cy.get('#username').should('have.attr', 'placeholder', 'Enter your username')

  // Assert that username label exists
  cy.get('label').eq(0).should('have.text', 'Username')

  // Assert that password field exists
  cy.get('#password').should('exist')

  // Assert password placeholder text
  cy.get('#password').should('have.attr', 'placeholder', 'Enter your password')

  // Assert that password label exists
  cy.get('label').eq(1).should('have.text', 'Password')

  // Assert that SignIn button field exists
  cy.get('#log-in').should('exist')

  // Assert that SignIn button label is "Sign In"
  cy.get('#log-in').should('have.text', 'Sign in')

  // Assert that the RememberMe checkbox exists
  cy.get('input.form-check-input').should('exist')

  // Assert that the RememberMe text exists
  cy.get('label').eq(2).should('have.text', 'Remember Me')

  // Assert that the Twitter button exists
  cy.get('form a').eq(0).find('img').first().should('exist')

  // Assert that the Facebook button exists
  cy.get('form a').eq(1).find('img').first().should('exist')

})