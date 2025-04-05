import React from "react";
import { NavLink } from "react-router-dom";

const adminLinks = [
  { label: "User Management", path: "/admin/user-management" },
  { label: "Course Management", path: "/admin/course-management" },
  { label: "Report Generation", path: "/admin/report-generation" },
  { label: "System Monitoring", path: "/admin/system-monitoring" },
  { label: "Announcements", path: "/admin/announcements" },
];

const AdminSidebar = () => {
  return (
    <div className="w-64 h-screen bg-blue-700 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
      <ul>
        {adminLinks.map((item) => (
          <li key={item.path} className="mb-4">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "text-gray-200 font-semibold" : "text-white"
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

export default AdminSidebar;
