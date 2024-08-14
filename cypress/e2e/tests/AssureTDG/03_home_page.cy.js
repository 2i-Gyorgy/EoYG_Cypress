Cypress.Commands.add("navigateToHomePage", function (email, password) {
  // visit login page
  cy.visit("http://localhost:3000");
  //Do the login
  cy.get("#email-input").clear().type(email);
  cy.get("#password-input").clear().type(password);
  cy.get("#login-button").click();
});

describe("test light/dark theme switch", function () {
  beforeEach(function () {
    cy.fixture("logins_assureTDG").then(function (data) {
      // Putting data on Mocha.context this
      this.email = data.email;
      this.password = data.password;
    });
  });
  it("toggles theme and checks if result is as expected", function () {
    // call log in function
    cy.navigateToHomePage(this.email, this.password);

    // check if we are on the home page
    cy.get("#page-title").contains("AssureTDG Login");

    // cy.get("#logout-link").next().click();
    cy.get("#light-mode").should("be.visible").should("be.enabled").click();
    cy.get(".page").should("have.class", "dark");
    cy.get("#dark-mode").should("be.visible").should("be.enabled").click();
    cy.get(".page").should("have.class", "light");

    // log out
    cy.get("#logout-link").click();
  });
});
