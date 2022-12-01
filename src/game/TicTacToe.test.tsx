import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
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
    render(<TicTacToe/>);
    const firstBlock = screen.getByTestId('box-0-td');
    fireEvent.click(firstBlock);
    const firstBlockAfterEvent = screen.getByTestId('box-0-td');
    expect(firstBlockAfterEvent.textContent).toBe('X');
    expect(screen.getByTestId('turn-info-div')).toHaveTextContent('Turn of player O');
});

test('a classic turn of player O', () => {
    render(<TicTacToe/>);
    const firstBlockByX = screen.getByTestId('box-0-td');
    fireEvent.click(firstBlockByX);

    const secondBlockByO = screen.getByTestId('box-2-td');
    fireEvent.click(secondBlockByO);

    const secondBlockByOAfterEvent = screen.getByTestId('box-2-td');
    expect(secondBlockByOAfterEvent.textContent).toBe('O');
    expect(screen.getByTestId('turn-info-div')).toHaveTextContent('Turn of player X');

});

test('prevention of second click on the same box by the next player', () => {
    render(<TicTacToe/>);
    const firstBlockByX = screen.getByTestId('box-0-td');
    fireEvent.click(firstBlockByX);
    fireEvent.click(firstBlockByX);
    const firstBlockByXAfterEvent = screen.getByTestId('box-0-td');
    expect(firstBlockByXAfterEvent.textContent).toBe('X');
})