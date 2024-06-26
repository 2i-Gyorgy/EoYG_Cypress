// Cypress.Commands.add('login', function (uname, passwd) {
//     //Do the login
//     cy.get('#username').type(uname)
//     cy.get('#password').type(passwd)
//     cy.contains('a', 'Submit').click()
// })

//To make custom command availabla in all test specs, place command in /cypress/support/commands.js

describe("Using Custom commands", function () {
  it("Logs in to the webdriver site", function () {
    cy.visit("https://www.edgewordstraining.co.uk/webdriver2/sdocs/auth.php");

    // cy.login('edgewords', 'edgewords123')
    cy.login_edgewords("webdriver", "edgewords123");

    //Check login
    cy.get("H1").should("have.text", "Add A Record To the Database");
  });
});
