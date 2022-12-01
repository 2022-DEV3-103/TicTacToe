import TicTacToe from "../../src/game/TicTacToe";

describe('Unit testing of component TicTacToe', () => {

  beforeEach(() => {
    cy.mount(<TicTacToe />);
  });

  it('should keep the same value after a double click on the same box', () => {
    cy.get('[data-testid="box-0-td"]').dblclick();
    cy.get('[data-testid="box-0-td"]').contains('X');
    cy.get('[data-testid="turn-info-div"]').contains('Turn of player O');
  });

  it('should restart the game when button Play Again is clicked', () => {
    //TODO
  });

  it('should check if the a box is filled after a click by X',  () => {
    cy.get('[data-testid="box-0-td"]').should('not.contain', 'X');
    cy.get('[data-testid="box-0-td"]').click();
    cy.get('[data-testid="box-0-td"]').should('contain', 'X');
    cy.get('[data-testid="turn-info-div"]').should('contain', 'Turn of player O');
  });

  it('should check if the a box is filled after a click by O', () => {
    cy.get('[data-testid="box-0-td"]').click();
    cy.get('[data-testid="box-2-td"]').click();
    cy.get('[data-testid="box-2-td"]').should('contain', 'O');
    cy.get('[data-testid="turn-info-div"]').should('contain', 'Turn of player X');
  });
})