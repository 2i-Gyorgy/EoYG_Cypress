describe("test login page content", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000");
  });
  it("checks login page loads", function () {
    // Test is page is available
    cy.get("#page-title").contains("AssureTDG Login");
  });
  it("checks login page facilitates logging in", function () {
    cy.get("#email-input")
      .should("exist")
      .and("have.attr", "placeholder", "Email...");
    cy.get("#password-input")
      .should("exist")
      .and("have.attr", "placeholder", "Password...");
    cy.get("#login-button")
      .should("be.visible")
      .should("be.enabled")
      .and("contain", "Login");
  });
  it("Forgot Password? button exists", function () {
    cy.get("#forgot-button").should("be.visible").should("be.enabled");
  });
});

describe("test login functionality", function () {
  // Load secrets
  before(function () {
    cy.fixture("logins_assureTDG").then(function (data) {
      // Putting data on Mocha.context this
      this.email = data.email;
      this.password = data.password;
    });
  });

  it("logs in (and out)", function () {
    // Visit AssureTDG on localhost
    cy.visit("http://localhost:3000");
    // Type login datails and log in
    cy.get("#email-input").clear().type(this.email);
    cy.get("#password-input").clear().type(this.password);
    cy.get("#login-button").click();

    cy.get("#logout-link").should("exist"); // existance of the logout link should indicate that we are logged in

    cy.get("#logout-link").click(); // log out
    cy.get("#login-button").should("exist"); // existance of login buton should indicate that we are logged out
  });
});
