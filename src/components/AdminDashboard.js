import React from 'react';
import { useAuth } from '../contexts/AuthContext'; // Ensure this path is correct

const AdminDashboard = () => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <div>Loading...</div>; // Or redirect to login
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {currentUser.email}</p>
      {/* Render other admin dashboard components */}
    </div>
  );
};

export default AdminDashboard;
