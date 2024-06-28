import React from 'react';
import TodoItem from './TodoItem';
import './../styles/TodoList.css';

const TodoList = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
