import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import React from 'react';
import LoggedInPage from './components/LoggedInPage';
import ProtectedRoute from './components/ProtectedRoute';
import { useUser } from './hooks/useUser';

function App() {
  const user = useUser();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/loggedIn"
        element={
          <ProtectedRoute user={user}>
            <LoggedInPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
