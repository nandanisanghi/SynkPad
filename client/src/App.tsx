import { Routes, Route, Navigate } from 'react-router-dom';
import Editor from './pages/Editor';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/pad/:slug" element={<Editor />} />
    </Routes>
  );
}
