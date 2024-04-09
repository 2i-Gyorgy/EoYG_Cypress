describe.only('Test add/remove elmenet', () => {
  it('Gets, "Add/Remove Elements" and asserts', () => {
    cy.visit('https://the-internet.herokuapp.com/')

    cy.contains('Add/Remove Elements').click()

    // Should be on a new URL which
    // includes '/add_remove_elements/'
    cy.url().should('include', '/add_remove_elements/')

    // Get the button, check if it exists
    cy.get('button').should('exist')

    // click the button
    cy.get('button').click()

    // check if it added new elemnt
    cy.get('.added-manually').should('exist')
  })
})