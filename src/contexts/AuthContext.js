import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Create AuthContext
const AuthContext = createContext();

// Create AuthProvider component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  // Initialize authentication state
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Example decoding of token; adjust based on your JWT setup
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      setCurrentUser({ email: decodedToken.email, role: decodedToken.role });
    }
  }, []);

  const login = async (email, password) => {
    // Replace with your actual login logic
    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
      const { token } = await response.json();
      localStorage.setItem('token', token);
      setCurrentUser({ email, role: JSON.parse(atob(token.split('.')[1])).role });
      navigate('/dashboard');
    } else {
      throw new Error('Login failed');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setCurrentUser(null);
    navigate('/login');
  };

  const value = { currentUser, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
