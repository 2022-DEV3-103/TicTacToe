declare namespace Cypress {
    interface Chainable {
        simulateWinForX: () => void;
        simulateWinForO: () => void;
        simulateDraw: () => void;
    }
}

Cypress.Commands.add('simulateWinForX', () => {
    cy.get('[data-testid="box-0-td"]').click();
    cy.get('[data-testid="box-1-td"]').click();
    cy.get('[data-testid="box-3-td"]').click();
    cy.get('[data-testid="box-2-td"]').click();
    cy.get('[data-testid="box-3-td"]').click();
    cy.get('[data-testid="box-6-td"]').click();
});

Cypress.Commands.add('simulateWinForO', () => {
    cy.get('[data-testid="box-0-td"]').click();
    cy.get('[data-testid="box-1-td"]').click();
    cy.get('[data-testid="box-2-td"]').click();
    cy.get('[data-testid="box-4-td"]').click();
    cy.get('[data-testid="box-3-td"]').click();
    cy.get('[data-testid="box-7-td"]').click();
});

Cypress.Commands.add('simulateDraw', () => {
    cy.get('[data-testid="box-0-td"]').click();
    cy.get('[data-testid="box-1-td"]').click();
    cy.get('[data-testid="box-2-td"]').click();
    cy.get('[data-testid="box-3-td"]').click();
    cy.get('[data-testid="box-5-td"]').click();
    cy.get('[data-testid="box-6-td"]').click();
    cy.get('[data-testid="box-7-td"]').click();
    cy.get('[data-testid="box-8-td"]').click();
    cy.get('[data-testid="box-4-td"]').click();
});