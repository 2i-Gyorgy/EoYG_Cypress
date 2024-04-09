describe('Another Suite', function () {
    it('Does Actions', function () {
        cy.visit('https://www.edgewordstraining.co.uk/webdriver2/docs/forms.html')
        cy.get('#textInput').click('bottomLeft')
        cy.get('input[type=radio]').eq(1).click()
        cy.get('input[type=radio]').click({multiple: true})
        cy.get('input[type=radio]').each(function(elm, index, list){
            if(index!=1){
                cy.wrap(elm).click()
            }
        })
    });
});