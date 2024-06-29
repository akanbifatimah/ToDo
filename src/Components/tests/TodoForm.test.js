import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoForm from '../TodoForm';

test('submits form with input', () => {
  const addTodo = jest.fn();
  render(<TodoForm addTodo={addTodo} />);

  fireEvent.change(screen.getByPlaceholderText(/add todo/i), {
    target: { value: 'New Todo' },
  });
  fireEvent.click(screen.getByText(/Add Todo/i));

  expect(addTodo).toHaveBeenCalledWith('New Todo');
});
