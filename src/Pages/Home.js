import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Phoenix Todo App</h1>
      <p>Manage your tasks efficiently and stay organized.</p>
      <div className="nav-links">
        <Link to="/todos">Todos</Link>
        <Link to="/about">About</Link>
        <Link to='/login'>Login</Link>
      </div>
    </div>
  );
};

export default Home;
