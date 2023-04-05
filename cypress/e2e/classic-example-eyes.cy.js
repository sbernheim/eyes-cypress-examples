it.skip('should log in and validate with Visual AI', () => {

  // Open the login page
  cy.visit('http://localhost:8000/loginBefore.html')

  // Click on the login button
  cy.get('#log-in').click();

  // Open Eyes
  cy.eyesOpen({ appName: 'Demo App', testName: 'Login Page Test' });

  // Take a screenshot for Eyes AI analysis
  cy.eyesCheckWindow("Login Window");

  // Close Eyes
  cy.eyesClose();

})


