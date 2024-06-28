import React from 'react';
import './../styles/TodoFilter.css';

const TodoFilter = ({ filter, setFilter }) => {
  return (
    <div className="todo-filter">
      <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
      <button className={filter === 'active' ? 'active' : ''} onClick={() => setFilter('active')}>Active</button>
      <button className={filter === 'completed' ? 'active' : ''} onClick={() => setFilter('completed')}>Completed</button>
    </div>
  );
};

export default TodoFilter;
