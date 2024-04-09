// describe('My First Test', () => {
//   it('visits the site called The Internet', () => {
//     cy.visit('https://the-internet.herokuapp.com/')
//   })
// })

// describe('My Second Test', () => {
//   it('finds the content "Add/Remove Elements"', () => {
//     cy.visit('https://the-internet.herokuapp.com/')

//     cy.contains('Add/Remove Elements')
//   })
// })

// describe('My Third Test', () => {
//   it('clicks the link "Add/Remove Elements"', () => {
//     cy.visit('https://the-internet.herokuapp.com/')

//     cy.contains('Add/Remove Elements').click()
//   })
// })

// describe('My fourth Test', () => {
//   it('clicking "Add/Remove Elements" navigates to a new url', () => {
//     cy.visit('https://the-internet.herokuapp.com/')

//     cy.contains('Add/Remove Elements').click()

//     // Should be on a new URL which
//     // includes '/add_remove_elements/'
//     cy.url().should('include', '/add_remove_elements/')
//   })
// })

describe('My 5th Test', () => {
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