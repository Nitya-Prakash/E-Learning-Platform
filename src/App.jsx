import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import FacultyDashboard from "./pages/FacultyDashboard";
import StudentDashboard from "./pages/StudentDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/admin/*" element={<AdminDashboard />} />
      <Route path="/faculty/*" element={<FacultyDashboard />} />
      <Route path="/student/*" element={<StudentDashboard />} />
    </Routes>
  );
}

export default App;
