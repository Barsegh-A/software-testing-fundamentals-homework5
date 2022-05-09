Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('Books.am Test', () => {
    it('Item count test', () => {
        cy.visit('https://books.am/');
        cy.get('#search').type("Դորիան");
        cy.get('.icon_search').eq(1).click();
        cy.get('.product_inner').first().click();
        cy.get('.increase_btn').click();
        cy.get('#qty').should('have.value', '2');
        cy.get('.decrease_btn').click();
        cy.get('#qty').should('have.value', '1');
    })
})