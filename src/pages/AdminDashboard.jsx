import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import UserManagement from "../pages/sub-pages/UserManagement";
import CourseManagement from "../pages/sub-pages/CourseManagement";
import ReportGeneration from "../pages/sub-pages/ReportGeneration";
import SystemMonitoring from "../pages/sub-pages/SystemMonitoring";
import Announcement from "../pages/sub-pages/Announcement";

const AdminDashboard = () => {
  return (
    <div className="flex ">
      <AdminSidebar />
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Navigate to="user-management" />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="course-management" element={<CourseManagement />} />
          <Route path="report-generation" element={<ReportGeneration />} />
          <Route path="system-monitoring" element={<SystemMonitoring />} />
          <Route path="announcements" element={<Announcement />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;

