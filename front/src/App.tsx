import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import React from 'react';
import ProtectedRoute from './components/ProtectedRoute';
import { useUser } from './hooks/useUser';
import Admin from './components/Admin/Admin';
import Client from './components/Client/Client';

function App() {
  const user = useUser();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/cats"
        element={
          <ProtectedRoute user={user}>
            <Client />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <ProtectedRoute user={user}>
            <Admin />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
