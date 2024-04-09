describe('Test checkbox', () => {
  it('visits checkboxes page and plays around with check boxes', () => {
    cy.visit('https://the-internet.herokuapp.com/checkboxes')
    // Get the checkbox, check if it exists
    cy.get("input")
    .should('exist')
    .and('have.attr', 'type')

    // click the button
    cy.get("input")
    .click({ multiple: true })

    // check if it added new elemnt
    // cy.get('.added-manually').should('exist')
  })
})