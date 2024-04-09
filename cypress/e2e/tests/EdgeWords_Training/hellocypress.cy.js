describe('template spec', function () { //A test suite
  it('First Cypress Test', function () {
    console.log("Start Test") //Executes now - effects now in the browser console.
    
    //cy commands execute 'now' but have their effects 'later'
    //cy commands are enqued for execution in the order they are encountered, so visit will allways be before contains and get lines
    cy.visit('https://www.edgewordstraining.co.uk/demo-site/')
    
    cy.contains('Dismiss').click()

    cy.get('#woocommerce-product-search-field-0').type("cap{enter}")
    
    console.log("Finish Test") //Executes 'now', effects 'now' - result is that "Start Test" and "Finish Test" appear in the browsers console log before any of the actual test has happened
    cy.log("Finished") //For logging cy.log is enqueued in order with other cy commands and so should be used instead.
    cy.log('Login Successful')
    cy.log('normal')
    cy.log('**bold**') //Undocumented markdown support in the log!
    cy.log('_italic_')
    cy.log('[Link text](http://example.com)')
    cy.log('![Logo](http://edgewordstraining.co.uk/training-site/images/site_logo.gif)') //Once this is done...
      .then(function () {
        console.log("Actually at the end") //This console.log will take place after the last log message, instead of immediately as with the other console.log()s
      })
    cy.screenshot('wholepage') //Whole page
    cy.get('#woocommerce-product-search-field-0').screenshot('searchbox') //On yielded element 
    //A screenshot is captured automatically on test fail when the test is run from the commandline.
  })

  it.skip('Test to Skip', function () {
    cy.visit("https://google.com")
    //cy.pause() //Pauses test execution in browser allowing you to step through test steps slowly
    cy.visit('https://www.edgewordstraining.co.uk/demo-site/') //If you navigate to a different site (either by visit, or just clicking on and following a link) old Cypress couldn't access element on the new page.
    cy.origin('https://www.edgewordstraining.co.uk', ()=>{ //Cy.origin() works around this by starting a new cypress session in the new origin
      cy.get('#woocommerce-product-search-field-0')
        .debug() //With browser dev tools open pause execution and output debug details to browser console
        .clear() //Element(s) continue to be yielded down the chain, so you can clear the text box then type() after.
        .type('{shift}cap{enter}{shift}') //This *won't* result in 'CAP' - Cypress cant send real keypress events. But any JS waiting for the shift key to be held would be triggered.
      //Go back to google...
      cy.visit('https://www.google.com')
      //...but you wont be able to access elements on google here
      //Nor can you nest another cy.origin() here
      //you must instead leave...
    })
    //...and then you can interact with elements on google.com
    cy.contains('button', 'Accept all').click()
  });
  
  it.only('Second Test', function () {
    cy.visit("https://google.com")
    cy.visit('https://www.edgewordstraining.co.uk/demo-site/')
    cy.origin('https://www.edgewordstraining.co.uk/', () => {
      cy.get('#woocommerce-product-search-field-0').clear().type("cap{enter}")
    })
  });

 

  it.only('Locators', function () {
    cy.visit('https://www.edgewordstraining.co.uk/demo-site/')
    cy.get('#woocommerce-product-search-field-0').type('cap{enter}')
    //cy.get('.summary').contains('Add to cart').click() //Limit search for 'Add to cart' inside .summary
    //cy.get('.summary').get('.single_add_to_cart_button').click() //don’t chain .gets - use find after the first get
    cy.get('.summary').find('.single_add_to_cart_button').click()
    cy.get('li.product > a.button') //yeilds 3 elements
      .filter('[aria-label*=Belt]') //filter the elements returned to the one with Belt in aria-label
    cy.get('li.product > a.button').eq(0) //Get the 1st element from 3 yielded
    // If you want to repeatedly do things with elements in a defined area...
    // cy.get('.summary').find('[id^=quantity]').clear().type('2')
    // cy.get('.summary').find('.single_add_to_cart_button').click()
    //...it might be more efficient to operate within() that area
    cy.get('.summary').within(function(){
      cy.get('[id^=quantity]').clear().type('2') //.get() here searches within .summary - not from the root
      //cy.get('.single_add_to_cart_button').click()
      //cy.contains('add to cart',{matchCase: false}).click() //Contains is normally case sensitive but an options object argument can turn that off
      //cy.contains(/add to cart/i).click() //or you could use regex
      cy.contains('button','add to cart',{matchCase: false}).click() //You can also use CSS to pre-filter where the inner text will be looked for
      // cy.get('[data-cy=mytestid1]') //Best practice would be to look for elements based on data-cy or data-testid - but this might only be a realistic option if *you* are developing the site, or testing has been thought about at the development stage
    })
  });
})