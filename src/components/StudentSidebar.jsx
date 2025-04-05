import React from "react";
import { Link, useLocation } from "react-router-dom";

const studentLinks = [
    { name: "Course Enrolment", path: "/student/course-enrolment" },
    { name: "Lecture Access", path: "/student/lecture-access" },
    { name: "Assignment Submission", path: "/student/assignment-submission" },
    { name: "Quiz & Exams", path: "/student/quiz-exam-participation" },
    { name: "Grades & Feedback", path: "/student/grades-feedback" },
    { name: "Push Notifications", path: "/student/push-notifications" },
  ];
  

const StudentSidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 h-screen bg-blue-700 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Student Panel</h2>
      <ul className="space-y-4">
        {studentLinks.map(link => (
          <li key={link.name}>
            <Link
              to={link.path}
              className={`block px-3 py-2 rounded ${
                location.pathname.includes(link.path)
                  ? "bg-blue-900"
                  : "hover:bg-blue-600"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentSidebar;
