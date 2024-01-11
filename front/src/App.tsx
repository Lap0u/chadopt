import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import React from 'react';
import LoggedInPage from './components/CatList/CatList';
import ProtectedRoute from './components/ProtectedRoute';
import { useUser } from './hooks/useUser';
import CatList from './components/CatList/CatList';
import Admin from './components/Admin/Admin';

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
            <CatList />
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
