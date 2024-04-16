describe("Test Checkbox functionality", function () {
  it("clicks check boxes", () => {
    // visit page in question for testing
    cy.visit("https://the-internet.herokuapp.com/checkboxes");

    // First Checkbox should be Enabled and Not Checked
    cy.get('[type="checkbox"]')
      .first()
      .should("be.enabled")
      .and("not.be.checked");

    // Second Checkbox should be Enabled and Checked
    cy.get('[type="checkbox"]').eq(1).should("be.enabled").and("be.checked");

    // Click the first Chekbox and assert that it is cheked
    // cy.get('[type="checkbox"]').first().check();
    cy.get('[type="checkbox"]').first().click().should("be.checked");

    // Click the second Chekbox and assert that it is Not Cheked
    // cy.get('[type="checkbox"]').first().check();
    cy.get('[type="checkbox"]').eq(1).click().should("not.be.checked");
  });
});
