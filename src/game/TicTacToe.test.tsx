import React from 'react';
import {render, screen} from '@testing-library/react';
import TicTacToe from "./TicTacToe";


test('render correctly the component TicTacToe', () => {
    render(<TicTacToe/>);
    const view = render(<TicTacToe/>);
    expect(view).toBeTruthy();
});

test('the rendering of the title', () => {
    render(<TicTacToe/>);
    const title = screen.getByTestId('title-h4');
    expect(title.textContent).toBe('Welcome BNP Paribas Fortis! Here is a TDD TikTacToe');
});

test('the rendering of the first turn ( X )', () => {
    render(<TicTacToe/>);
    const turnInfo = screen.getByTestId('turn-info-div');
    expect(turnInfo.textContent).toBe('Turn of player X');
});

test('a classic turn of player X', () => {
    //TODO
});

test('a classic turn of player O', () => {
    //TODO
});

test('prevention of second click on the same box by the next player', () => {
    //TODO
})