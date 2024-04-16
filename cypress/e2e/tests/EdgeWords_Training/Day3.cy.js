describe('Another Suite', function () {
    before(function () {
        cy.log('Runs once before Suite')
    });
    beforeEach(function () {
        cy.log('Runs before each Test')        
    });
    after(function () {
        cy.log('Runs once Suite')
    });
    afterEach(function () {
        cy.log('Runs once after each Test')        
    });
    //to make these hooks global, place them in /cypress/support/e2e.js

    it('Does Actions - radio button', function () {
        cy.visit('https://www.edgewordstraining.co.uk/webdriver2/docs/forms.html')
        cy.get('#textInput').click('bottomLeft')
        cy.get('input[type=radio]').eq(1).click()
        cy.get('input[type=radio]').eq(1).check()
        cy.get('input[type=radio]').check('One', 'Three')
        cy.get('input[type=radio]').check({multiple: true})
        cy.get('input[type=radio]').each(function(elm, index, list){
            if(index!=1){
                cy.wrap(elm).click()
            }
        })
    });
    it('Does Actions - typing', function () {
        cy.visit('https://www.edgewordstraining.co.uk/webdriver2/docs/forms.html')
        cy.get('#textInput').type('Hello World')
        cy.get('#textInput').clear()
        cy.get('#textInput').type('{{}Hello World{}}', {delay: 200})
    });
    it('Does Actions - checkbox', function () {
        cy.visit('https://www.edgewordstraining.co.uk/webdriver2/docs/forms.html')
        cy.get('input[type=checkbox]').click() //toggle state
        cy.get('input[type=checkbox]').uncheck() //turn off
        cy.get('input[type=checkbox]').check() //turn off
        });
    it('Does Actions - interracts with selection box', function () {
        cy.visit('https://www.edgewordstraining.co.uk/webdriver2/docs/forms.html')
        cy.get('#select').select('Selection Two') //Select by text
        cy.get('#select').select(0) //Select by position
        });
    it('Does Actions - mouse over / hover', function () {
        cy.visit('https://www.edgewordstraining.co.uk/demo-site/')
        cy.get('#woocommerce-product-search-field-0').type('cap{enter}')
        cy.contains('Add to cart').click()

        // cy.get('#site-header-cart > li:nth-child(1)').hover()  //not implemented in cypress
        // cy.get('#site-header-cart > li:nth-child(1)').trigger('mouseover') //menu is not JS, therefore it won't work
        cy.get('.widget_shopping_cart').invoke('css', 'left', '0px')
        cy.get('.widget_shopping_cart').contains('View cart').click()
        // cy.get('.widget_shopping_cart').contains('View cart').click({force: true})
    })
    it('Does Actions - wait', function () {
        cy.visit('https://www.edgewordstraining.co.uk/webdriver2/docs/dynamicContent.html')
        cy.get('#delay').clear().type('10')
        cy.contains('a', 'Load Content').click()
        // cy.wait(4000) //Don't do this
        cy.get('#image-holder > img:nth-child(1)', {timeout: 12000}).click()
    })


    // Assertions //
    it.only('does assertions', function () {
        cy.visit('https://www.edgewordstraining.co.uk/webdriver2/docs/forms.html')
        cy.get('#textInput').type('Hello World')
        cy.get('#textInput').should('have.value', 'Hello World')

        cy.get('h1').should('contain', 'For')
        cy.get('h1').invoke('text').should('match', /^For/) //to use regular expression
        cy.get('h1').invoke('text').then(function(theText){ //it's ok to use cy.log inside then as it won't retry, won't work with should as that will retry... and somethimes we might want to wait and retry
            cy.log('The captured text was ' + theText)
            expect(theText).to.match(/^For/)
            expect(theText).to.equal("Forms")
        })

        cy.get('input[type=radio]').should('have.length',3)

    });
});