describe("test forgot password functionality", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000");
  });
  it("checks Forgot Password? link works", function () {
    cy.get("#forgot-button").click();
    cy.get("#page-title").contains("Password Reset");
  });
  it("checks forgot password page facilitates password reset", function () {
    // navigate to reset password page
    cy.get("#forgot-button").click();
    // check content
    cy.get("#email-input")
      .should("exist")
      .and("have.attr", "placeholder", "Email...");
    cy.get("#forgot-button")
      .should("be.visible")
      .should("be.enabled")
      .and("contain", "Submit");
  });

  // Load secrets
  before(function () {
    cy.fixture("logins_assureTDG").then(function (data) {
      // Putting data on Mocha.context this
      this.email = data.email;
      this.password = data.password;
    });
  });
  it.skip("resets password", function () {
    cy.get("#forgot-button").click();
    cy.get("#email-input").clear().type(this.email);
    cy.get("#forgot-button").click();
  });
});
