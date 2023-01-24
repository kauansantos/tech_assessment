
// HOME PAGE COMMANDS

Cypress.Commands.add('default_residents_zipcode', () => {

    cy.get('#ppl-in-household-input').type('1')
    cy.get('#zip-code-input').type('12345') 
    cy.get('#get-started').click()

})