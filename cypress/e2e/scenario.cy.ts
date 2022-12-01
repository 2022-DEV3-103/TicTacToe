describe('e2e Testing of the game', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  })

  it('should trigger a win scenario for X with the message and play button shown', () => {
    cy.simulateWinForX();
    cy.get('[data-testid="winner-info-p"]').contains("The winner is player X!");
    cy.get('[data-testid="play-again-btn"]').should('be.visible');
  });

  it('should trigger a win scenario for O with the message and play button shown', () => {
    cy.simulateWinForO();
    cy.get('[data-testid="winner-info-p"]').contains("The winner is player O!");
    cy.get('[data-testid="play-again-btn"]').should('be.visible');
  });

  it('should show draw message and play button when a draw is triggered', () => {
   //TODO
  });



})