// routes/AppRoutes.jsx
import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import Register from '../pages/Register';
import AdminDashboard from '../pages/AdminDashboard';
import CustomerDashboard from '../pages/CustomerDashboard';

export default function AppRoutes() {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const userRole = localStorage.getItem('userRole');

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/admin-dashboard"
        element={
          isAuthenticated && userRole === 'admin' ? (
            <AdminDashboard />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />
      <Route
        path="/customer"
        element={
          isAuthenticated && userRole === 'customer' ? (
            <CustomerDashboard />
          ) : (
            <Navigate to="/" replace />
          )
        }
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
