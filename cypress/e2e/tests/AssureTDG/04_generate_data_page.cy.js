Cypress.Commands.add("navigateToDataPage", function (email, password) {
  // visit login page
  cy.visit("http://localhost:3000");
  //Do the login
  cy.get("#email-input").clear().type(email);
  cy.get("#password-input").clear().type(password);
  cy.get("#login-button").click();
});

describe("test data geration functionality", function () {
  before(function () {
    cy.fixture("logins_assureTDG").then(function (data) {
      // Putting data on Mocha.context this
      this.email = data.email;
      this.password = data.password;
    });
  });
  it("generates data", function () {
    // call log in function
    cy.navigateToDataPage(this.email, this.password);

    cy.contains("a", "DATA").click();
    cy.get("input[id='entries-counter']").clear().type("13");
    // select Personal Template
    cy.get("select[id='templates-selector']")
      .select(4)
      .should("contain", "Personal");
    // click submit button
    cy.get("button[id='submit-template']").click();
    // click generate data
    cy.get("button[id='generate-values']").click();
    // click download
    cy.get("button[id='download-button']").click();

    // log out
    cy.get("#logout-link").click();
  });
});
