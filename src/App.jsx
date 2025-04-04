import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import FacultyDashboard from './pages/FacultyDashboard';
import StudentDashboard from './pages/StudentDashboard';

const App = () => {
  return (
    <div className='bg-green-500'>
      <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/faculty" element={<FacultyDashboard />} />
      <Route path="/student" element={<StudentDashboard />} />
    </Routes>
    </div>
  )
}

export default App