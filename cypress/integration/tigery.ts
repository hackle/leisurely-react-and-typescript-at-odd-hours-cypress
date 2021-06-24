describe('tiger app', () => {
    it('can open', () => {
        cy.visit('');

        cy.get('input[name=term]').type('tiger');
        cy.get('select').select('web');

        cy.get('button[type=submit]').click();

        cy.url().should('eq', Cypress.config().baseUrl + 'photos/tiger/web');

        cy.get('a').contains('Search for something else').click();

        cy.url().should('eq', Cypress.config().baseUrl + 'search');
    });
});