import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import LoginForm from './LoginForm';
// import SignupForm from './SignupForm'; // Import the SignupForm component
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <nav className="navbar">
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <>
              <li>
                <Link to="/home">Student</Link>
              </li>
              <li>
                <Link to="/about">Performance</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>

      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <LoginForm onLogin={handleLogin} />}
        />
        <Route
          path="/home"
          element={isLoggedIn ? <Home /> : <LoginForm onLogin={handleLogin} />}
        />
        <Route
          path="/about"
          element={isLoggedIn ? <About /> : <LoginForm onLogin={handleLogin} />}
        />
        <Route
          path="/contact"
          element={isLoggedIn ? <Contact /> : <LoginForm onLogin={handleLogin} />}
        />
        <Route
          path="/login"
          element={isLoggedIn ? <Home /> : <LoginForm onLogin={handleLogin} />}
        />
        {/* <Route path="/signup" element={<SignupForm />} /> New Route for SignupForm */}
      </Routes>
    </Router>
  );
};

export default App;
