describe('Using Fixtures', function () {
    before(function () {
        // cy.fixture("logins").then(function(data){ //Putting data on Mocha.context this
        //     this.username = data.username;
        //     this.password = data.password;
        // })
        cy.fixture("logins").as("data") //Using an alias
    });
    it('Logs in to the webdriver site', function () {
        cy.visit('https://www.edgewordstraining.co.uk/webdriver2/sdocs/auth.php')

        // cy.get('#username').type(this.username) //Reading data on Mocha.context this
        // cy.get('#password').type(this.password)

        cy.get('@data').then(function(passedData){ //Retrieve the alias then() use the passedData
            cy.get('#username').type(passedData.username) //
            cy.get('#password').type(passedData.password)
        })

        cy.contains('a', 'Submit').click()

        //Check login
        cy.get('H1').should('have.text', 'Add A Record To the Database')
    });
});