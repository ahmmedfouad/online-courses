import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ element, role, ...rest }) => {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      element={
        currentUser && currentUser.role === role ? (
          element
        ) : (
          <Navigate to="/login" replace />
        )
      }
    />
  );
};

export default PrivateRoute;
