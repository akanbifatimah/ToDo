import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import TodoFilter from "./TodoFilter";
import "./../styles/TodoApp.css";
import Loading from "./../Images/LoadingState.json";
import Lottie from "lottie-react";
import Logout from "./AuthScreens/Logout";
const TodoApp = () => {
  // Add default todo items here
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch todos");
        }
        const data = await response.json();
        console.log({ data });
        setTodos(data.slice(0, 5)); // Limit to 5 items
        setLoading(false);
      } catch (error) {
        setError(
          error.message || "Something went wrong. Please try again later."
        );
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const addTodo = (title) => {
    const newTodo = { id: Date.now(), title, completed: false };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const pendingCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
   
      <div className="todo-app">
        <h1>Todo List</h1>
        <AddTodo addTodo={addTodo} />
        {loading ? (
          <div className="loading">
            <Lottie animationData={Loading} loop={true} className="lottie" />
            <p>Fetching Todo list...</p>
          </div>
        ) : error ? (
          <p className="error">Error: {error}</p>
        ) : (
          <>
            <TodoList
              todos={filteredTodos}
              toggleTodo={toggleTodo}
              removeTodo={removeTodo}
            />
            <p>Click the checkbox to mark Task as completed</p>
            <TodoFilter filter={filter} setFilter={setFilter} />
            {filter === "completed" ? (
              completedCount === 0 ? (
                <p>No tasks completed yet</p>
              ) : pendingCount === 0 ? (
                <p>Hurray🎉, All tasks completed!</p>
              ) : (
                <p>
                  You have <span className="count">{completedCount}</span>{" "}
                  completed tasks
                </p>
              )
            ) : filter === "active" ? (
              pendingCount === 0 ? (
                <p>Hurray🎉, All tasks completed!</p>
              ) : (
                <p>
                  You have <span className="count">{pendingCount}</span> tasks
                  pending
                </p>
              )
            ) : (
              <p>
                Total tasks: <span className="count">{totalCount}</span>
              </p>
            )}
          </>
        )}
        <div>
          <Logout />
        </div>
      </div>
    
  );
};

export default TodoApp;
