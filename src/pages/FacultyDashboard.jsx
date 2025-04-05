import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import FacultySidebar from "../components/FacultySidebar";
import FacultyCourseManagement from "../pages/sub-pages/FacultyCourseManagement";
import AssignmentQuizManagement from "../pages/sub-pages/AssignmentQuizManagement";
import StudentPerformance from "../pages/sub-pages/StudentPerformance";
import Notifications from "../pages/sub-pages/Notifications";

const FacultyDashboard = () => {
  return (
    <div className="flex">
      <FacultySidebar />
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Navigate to="course-management" />} />
          <Route path="/course-management" element={<FacultyCourseManagement />} />
          <Route path="assignment-quiz-management" element={<AssignmentQuizManagement />} />
          <Route path="student-performance" element={<StudentPerformance />} />
          <Route path="notifications" element={<Notifications />} />
        </Routes>
      </div>
    </div>
  );
};

export default FacultyDashboard;
