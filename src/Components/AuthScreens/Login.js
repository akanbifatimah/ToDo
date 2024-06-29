
import React, { useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import './../../styles/login.css'; 
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const dummyToken = '123456789090'; 
    login(dummyToken);
    navigate('/todos');
  };
  

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
           
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            
          />
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
        <div>
        <Link to='/'>Home</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
