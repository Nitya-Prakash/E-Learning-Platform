import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import StudentSidebar from "../components/StudentSidebar";
import CourseEnrolment from "../pages/sub-pages/CourseEnrollment";
import LectureAccess from "../pages/sub-pages/LectureAccess";
import AssignmentSubmission from "../pages/sub-pages/AssignmentSubmission";
import QuizExamParticipation from "../pages/sub-pages/QuizExamParticipation";
import GradesFeedback from "../pages/sub-pages/GradesFeedback";
import PushNotifications from "../pages/sub-pages/PushNotifications";

const StudentDashboard = () => {
  return (
    <div className="flex">
      <StudentSidebar />
      <div className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Navigate to="course-enrolment" />} />
          <Route path="course-enrolment" element={<CourseEnrolment />} />
          <Route path="lecture-access" element={<LectureAccess />} />
          <Route path="assignment-submission" element={<AssignmentSubmission />} />
          <Route path="quiz-exam-participation" element={<QuizExamParticipation />} />
          <Route path="grades-feedback" element={<GradesFeedback />} />
          <Route path="push-notifications" element={<PushNotifications />} />
        </Routes>
      </div>
    </div>
  );
};

export default StudentDashboard;
