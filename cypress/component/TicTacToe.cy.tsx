import TicTacToe from "../../src/game/TicTacToe";

describe('Unit testing of component TicTacToe', () => {

  beforeEach(() => {
    cy.mount(<TicTacToe />);
  });

  it('should keep the same value after a double click on the same box', () => {
   //TODO
  });

  it('should restart the game when button Play Again is clicked', () => {
    //TODO
  });

  it('should check if the a box is filled after a click by X',  () => {
   //TODO
  });

  it('should check if the a box is filled after a click by O', () => {
   //TODO
  });
})