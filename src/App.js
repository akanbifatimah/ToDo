import "./App.css";
import TodoApp from "./Components/TodoApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Components/Context/AuthContext";
import Login from "./Components/AuthScreens/Login";
import ProtectedRoute from "./Components/AuthScreens/ProtectedRoute";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Todo from "./Pages/Todo";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/todos" element={<ProtectedRoute component={TodoApp} />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
