import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthContext } from './context/AuthContext';

// Correct implementation of a protected route component
const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  
  return currentUser ? <Component {...rest} /> : <Navigate to="/login" replace />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute element={Home} />
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

