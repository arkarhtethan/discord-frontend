import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Dashboard from "./pages/dashboard";
import AlertNotification from "./shared/components/AlertNotification";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
      <AlertNotification />
    </div>
  );
}

export default App;
