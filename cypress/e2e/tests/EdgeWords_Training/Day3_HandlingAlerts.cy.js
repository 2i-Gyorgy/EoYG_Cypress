describe('Using Fixtures', function () {
    it('Handles Alerts', function () {
        cy.visit('https://www.edgewordstraining.co.uk/webdriver2/sdocs/auth.php')

        cy.on('window:alert', function(msg){
            console.log("The alert seen was " + msg)
        })
        cy.login('webdriver', 'edgewords123wrong')

        cy.login('webdriver', 'edgewords123')

        //Check login
        cy.get('H1').should('have.text', 'Add A Record To the Database')

        cy.on('window:confirm', function(msg){
            return false //Click cancel button - remain logged in
        })
        cy.contains('Log Out').click()
    });
});