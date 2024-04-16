describe("Test File Upload Functionality", function () {
  it("uploads a file", function () {
    // Visit the file upload page
    cy.visit("https://the-internet.herokuapp.com/upload");
    // Get the file input element and attach a file
    // const filePath = "cypress/e2e/tests/the_Internet/test_upload.txt";
    const filePath = "cypress/e2e/tests/the_Internet/";
    const fileName = "test_upload.txt";
    cy.get("input[type=file]")
      .eq(0)
      .selectFile(filePath + fileName);

    // Submit
    cy.get("#file-submit").click();
    // Verify that the upload was successful
    cy.get("#uploaded-files").should("contain", fileName);
  });
});
