import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoApp from '../TodoApp';


test('renders TodoApp component', () => {
  render(<TodoApp />);
  expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
});
