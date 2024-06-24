Cypress.Commands.add("login", function (email, password) {
  // visit login page
  cy.visit("http://localhost:3000");
  //Do the login
  cy.get("#email-input").clear().type(email);
  cy.get("#password-input").clear().type(password);
  cy.get("#login-button").click();
});

describe("test login/log out functionality", function () {
  it("visits AssureTDG", function () {
    cy.visit("http://localhost:3000");
    // cy.clearAllCookies();
    // cy.clearAllSessionStorage();
    // cy.clearAllLocalStorage();
    // cy.reload(true);
  });

  before(function () {
    cy.fixture("logins_assureTDG").then(function (data) {
      // Putting data on Mocha.context this
      this.email = data.email;
      this.password = data.password;
    });
  });

  it("logs in and out", function () {
    // call log in function
    cy.login(this.email, this.password);

    cy.get(".navbar").should("exist"); // existance of the navbar should indicate that we are logged in

    cy.get("#logout-link").should("exist").click(); // log out
    cy.get("#login-button").should("exist"); // existance of log out buton should indicate that we are logged out

    // cy.clearAllLocalStorage();
  });
});

describe("test light/dark theme switch", function () {
  before(function () {
    cy.fixture("logins_assureTDG").then(function (data) {
      // Putting data on Mocha.context this
      this.email = data.email;
      this.password = data.password;
    });
  });
  it("toggles theme and checks if result is as expected", function () {
    // cy.clearAllLocalStorage();
    // call log in function
    cy.login(this.email, this.password);

    cy.get("#logout-link").next().click();
    cy.get(".page").should("have.class", "dark");
    cy.get("#logout-link").next().click();
    cy.get(".page").should("have.class", "light");

    // log out
    cy.get("#logout-link").click();
  });
});

describe.only("test data geration functionality", function () {
  before(function () {
    cy.fixture("logins_assureTDG").then(function (data) {
      // Putting data on Mocha.context this
      this.email = data.email;
      this.password = data.password;
    });
  });
  it("generates data", function () {
    // call log in function
    cy.login(this.email, this.password);

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

    // https://www.browserstack.com/docs/automate/cypress/file-download-testing#Using_verifyDownload
    // https://www.npmjs.com/package/cy-verify-downloads
    // verify download
    // https://stackoverflow.com/questions/68082896/cypress-how-can-i-verify-if-the-downloaded-file-contains-name-that-is-dynamic
    cy.verifyDownload("Personal-9DxLJV.zip");

    // log out
    cy.get("#logout-link").click();
  });
});
