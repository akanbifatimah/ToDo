import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoFilter from './TodoFilter';
import './../styles/TodoApp.css';

const TodoApp = () => {
  // Add default todo items here
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Master JavaScript', completed: false },
  ]);
  const [filter, setFilter] = useState('all');

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  const pendingCount = todos.filter(todo => !todo.completed).length;
  const completedCount = todos.filter(todo => todo.completed).length;
  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      <TodoFilter filter={filter} setFilter={setFilter} />
      {filter === 'completed' ? (
        completedCount === 0 ? (
          <p>No tasks completed yet</p>
        ) : pendingCount === 0 ? (
          <p>Hurray🎉, All tasks completed!</p>
        ) : (
          <p>You have  <span className='count'>{completedCount}</span> completed tasks</p>
        )
      ) : (
        pendingCount === 0 ? (
          <p>Hurray🎉, All tasks completed!</p>
        ) : (
          <p>You have <span className='count'>{pendingCount}</span> tasks pending</p>
        )
      )}
     
    </div>
  );
};

export default TodoApp;

