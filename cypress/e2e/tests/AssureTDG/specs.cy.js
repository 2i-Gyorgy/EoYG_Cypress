describe("test login functionality", function () {
  it("visits AssureTDG", function () {
    cy.visit("https://develop.d3nylssqqiptjw.amplifyapp.com/");
  });

  it("logs in", function () {
    cy.visit("https://develop.d3nylssqqiptjw.amplifyapp.com/");
    cy.get("#login-button").then(($button) => {
      if ($button.exists()) {
        // type in login details and log in
        cy.get("#email-input").type("joebloggs@gmail.com");
        cy.get("#password-input").type("123456");
        cy.get("#login-button").click();
      }
    });
  });
});

describe("second step", () => {
  it.skip("", () => {
    // visit login page
    cy.visit("https://develop.d3nylssqqiptjw.amplifyapp.com/");
    cy.get("#login-button").then(($button) => {
      if ($button.exists()) {
        // type in login details and log in
        cy.get("#email-input").type("joebloggs@gmail.com");
        cy.get("#password-input").type("123456");
        cy.get("#login-button").click();
      }
    });
    // click Generate in menu
    //cy.get('.nav-links-container a').eq(1).click()
    cy.get(".nav-links-container a").contains("DATA").click();
    //cy.get('.nav-links-container a').first().next().click()
    // get #entries-counter
    cy.get("#entries-counter").clear().type("256");
    // select Personal Template
    cy.get(".templates-selector-light.parent div")
      .first()
      .children()
      .select("Medical");
    // click submit button
    cy.get(".templates-selector-light.parent div")
      .first()
      .next()
      .children()
      .click();
    // click generate data
    cy.get("#generate-values").click();

    // download
    cy.get("#download").click();

    //cy.wait(5000)
    //cy.get('#logout-link').click()
  });
});
