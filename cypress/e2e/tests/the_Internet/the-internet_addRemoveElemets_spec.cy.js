describe("Test add/remove elmenet page", function () {
  beforeEach(function () {
    // navigate to the page needs testing
    cy.visit("http://the-internet.herokuapp.com/add_remove_elements/");
  });

  it("Adds new element", function () {
    // Check that there's no delete button to start with
    cy.get(".added-manually").should("not.exist");

    // Click Add Button
    cy.get("button").should("exist").click();

    // Check if it added new elemnt
    cy.get(".added-manually").should("exist");
  });

  it("Deletest new element", function () {
    // Click add Button
    cy.get("button").click();

    // Click Delete Button
    cy.get(".added-manually").should("exist").click();

    // Check if it deleted Delete Button
    cy.get(".added-manually").should("not.exist");
  });
});
