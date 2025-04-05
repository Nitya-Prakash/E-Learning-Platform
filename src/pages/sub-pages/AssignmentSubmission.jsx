// src/pages/sub-pages/AssignmentSubmission.jsx
import React, { useState } from "react";

const dummyAssignments = [
  {
    id: 1,
    title: "Math Assignment 1",
    course: "Mathematics",
    dueDate: "2025-04-08T23:59",
    submitted: false,
  },
  {
    id: 2,
    title: "Physics Lab Report",
    course: "Physics",
    dueDate: "2025-04-06T12:00",
    submitted: false,
  },
  {
    id: 3,
    title: "Essay on Climate Change",
    course: "Environmental Studies",
    dueDate: "2025-04-10T18:00",
    submitted: false,
  },
];

const AssignmentSubmission = () => {
  const [assignments, setAssignments] = useState(dummyAssignments);

  const handleFileChange = (e, id) => {
    // Simulate submission
    const updated = assignments.map((a) =>
      a.id === id ? { ...a, submitted: true } : a
    );
    setAssignments(updated);
    alert("Assignment submitted successfully!");
  };

  const isDeadlinePassed = (dueDate) => {
    return new Date(dueDate) < new Date();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Assignment Submission</h2>
      <div className="space-y-6">
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            className="border p-4 rounded shadow-md bg-white"
          >
            <h3 className="text-xl font-semibold">{assignment.title}</h3>
            <p className="text-gray-600">Course: {assignment.course}</p>
            <p className="text-gray-600">
              Due Date: {new Date(assignment.dueDate).toLocaleString()}
            </p>
            <p
              className={`font-medium ${
                isDeadlinePassed(assignment.dueDate)
                  ? "text-red-500"
                  : "text-green-600"
              }`}
            >
              {isDeadlinePassed(assignment.dueDate)
                ? "Deadline Over"
                : "Open for Submission"}
            </p>

            <div className="mt-3">
              {assignment.submitted ? (
                <span className="text-blue-600 font-semibold">
                  ✅ Assignment Submitted
                </span>
              ) : isDeadlinePassed(assignment.dueDate) ? (
                <span className="text-red-500 font-semibold">
                  ❌ You missed the deadline
                </span>
              ) : (
                <input
                  type="file"
                  accept=".pdf,.docx"
                  onChange={(e) => handleFileChange(e, assignment.id)}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignmentSubmission;
