import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'; // Custom PrivateRoute component
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import InstructorDashboard from './components/InstructorDashboard';
import StudentDashboard from './components/StudentDashboard';
import LandingPage from './components/LandingPage';
import Signup from './components/Signup';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin/dashboard" element={<PrivateRoute component={<AdminDashboard />} role="admin" />} />
      <Route path="/instructor/dashboard" element={<PrivateRoute component={<InstructorDashboard />} role="instructor" />} />
      <Route path="/student/dashboard" element={<PrivateRoute component={<StudentDashboard />} role="student" />} />
    </Routes>
  );
};

export default App;
// In this example, we have a custom PrivateRoute component that checks the currentUser role and redirects to the login page if the user is not authenticated or does not have the correct role. We use this PrivateRoute component in the App component to protect the admin, instructor, and student dashboards based on the user's role.
