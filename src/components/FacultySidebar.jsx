import React from "react";
import { NavLink } from "react-router-dom";

const facultyLinks = [
  { label: "Course Management", path: "/faculty/course-management" },
  { label: "Assignment & Quiz Management", path: "/faculty/assignment-quiz-management" },
  { label: "Student Performance Tracking", path: "/faculty/student-performance" },
  { label: "Notifications & Reminders", path: "/faculty/notifications" },
];

const FacultySidebar = () => {
  return (
    <div className="w-64 bg-gray-100 min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Faculty Dashboard</h2>
      <ul>
        {facultyLinks.map((item) => (
          <li key={item.path} className="mb-4">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "text-gray-700"
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FacultySidebar;
