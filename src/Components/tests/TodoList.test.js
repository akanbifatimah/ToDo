import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from '../TodoList';

test('renders list of todos', () => {
  const todos = [{ id: 1, title: 'Test Todo', completed: false }];
  render(<TodoList todos={todos} />);

  expect(screen.getByText(/Test Todo/i)).toBeInTheDocument();
});
