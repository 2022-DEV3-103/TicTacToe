import React from 'react';
import { render } from '@testing-library/react';
import TicTacToe from "./game/TicTacToe";
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const view= render(<TicTacToe />);
  expect(view).toBeTruthy();
});
