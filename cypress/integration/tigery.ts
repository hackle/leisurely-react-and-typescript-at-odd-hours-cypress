import { transform } from "cypress/types/lodash";

describe('tiger app', () => {
    it('can open', () => {
        cy.visit('');

        cy.get('input[name=term]').type('tiger');
        cy.get('select').select('web');

        cy.get('button[type=submit]').click();

        cy.url().should('eq', Cypress.config().baseUrl + 'photos/tiger/web');

        cy.get('img').should(img => expect(img[0].naturalWidth).to.be.greaterThan(0));
        
        cy.get('img').should('have.css', 'transform').should('eq', 'matrix(1, 0, 0, 1, 0, 0)');

        cy.get('button').contains('Rotate').click();

        cy.get('img').should('have.css', 'transform').should('not.eq', 'matrix(1, 0, 0, 1, 0, 0)');

        // how to assert more rotation
        cy.get('img').should('have.css', 'transform').then(rotatedOnce => {
            cy.get('button').contains('Rotate').click();

            cy.get('img').should('have.css', 'transform').should('not.eq', rotatedOnce);
        });
    });
});