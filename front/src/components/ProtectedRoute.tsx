import { Navigate } from 'react-router-dom';
import React from 'react';

const ProtectedRoute = ({ user, children }) => {
  console.log('prot', user);
  if (!user.user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
