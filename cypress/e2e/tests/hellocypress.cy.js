describe('template spec', function () {
  it('First Cypress Test', function () {
    console.log("Start Test") //Executes now - effects now
    
    cy.visit('https://www.edgewordstraining.co.uk/demo-site/')
    
    cy.contains('Dismiss').click()

    cy.get('#woocommerce-product-search-field-0').type("cap{enter}")
    
    console.log("Finish Test") //Executes 'now', effects 'now'
    cy.log("Finished") //For logging cy.log is enqued in order with other cy commands
  })

  it.skip('Test to Skip', function () {
    cy.visit("https://google.com")
  });
  
  it.only('Second Test', function () {
    cy.visit("https://google.com")
    cy.visit('https://www.edgewordstraining.co.uk/demo-site/')
    cy.origin('https://www.edgewordstraining.co.uk/', () => {
      cy.get('#woocommerce-product-search-field-0').type("cap{enter}")
    })
  });
})