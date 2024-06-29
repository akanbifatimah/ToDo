import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoFilter from '../TodoFilter';

test('calls setFilter on filter button click', () => {
  const setFilter = jest.fn();
  render(<TodoFilter setFilter={setFilter} filter="all" />);

  fireEvent.click(screen.getByText(/Completed/i));

  expect(setFilter).toHaveBeenCalledWith('completed');
});
