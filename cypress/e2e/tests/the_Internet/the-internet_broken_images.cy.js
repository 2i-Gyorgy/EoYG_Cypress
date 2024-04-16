describe("Test Basic Authentication Functionality", function () {
  it("logs in by appending username and password in URL", function () {
    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    cy.get("p").should(
      "include.text",
      "Congratulations! You must have the proper credentials."
    );
  });

  it("logs in by using headers", function () {
    cy.visit("https://the-internet.herokuapp.com/basic_auth", {
      headers: {
        authorization: "Basic YWRtaW46YWRtaW4=",
      },
      failOnStatusCode: false,
    });
    cy.get("p").should(
      "include.text",
      "Congratulations! You must have the proper credentials."
    );
  });
});

// https://testersdock.com/cypress-basic-auth/
// I don't consider this to be a good test, as both solutions will bypass the basic auth popup, therefore not perform a life-like test.
