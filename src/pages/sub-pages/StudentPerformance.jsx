import React, { useState } from "react";


const mockStudents = [
  {
    id: 1,
    name: "Alice Johnson",
    course: "React Basics",
    progress: 85,
    grade: "A-",
    feedback: "Great understanding and participation.",
  },
  {
    id: 2,
    name: "Brian Smith",
    course: "Node.js Fundamentals",
    progress: 72,
    grade: "B",
    feedback: "Needs improvement in assignments.",
  },
  {
    id: 3,
    name: "Clara Watson",
    course: "MongoDB Essentials",
    progress: 91,
    grade: "A",
    feedback: "Excellent work throughout.",
  },
  {
    id: 4,
    name: "Daniel King",
    course: "React Basics",
    progress: 60,
    grade: "C+",
    feedback: "Improve consistency in performance.",
  },
];

const getProgressColor = (progress) => {
  if (progress >= 85) return "bg-green-500";
  if (progress >= 70) return "bg-yellow-400";
  return "bg-red-400";
};

const getStatus = (progress) => {
  if (progress >= 85) return "Excellent";
  if (progress >= 70) return "Good";
  return "Needs Improvement";
};

const StudentPerformanceTracking = () => {
  const [students, setStudents] = useState(mockStudents);
  const [search, setSearch] = useState("");
  const [filterCourse, setFilterCourse] = useState("All");
  const [sortAsc, setSortAsc] = useState(true);

  const courses = ["All", ...new Set(mockStudents.map((s) => s.course))];

  const filteredStudents = students
    .filter((s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterCourse === "All" || s.course === filterCourse)
    )
    .sort((a, b) =>
      sortAsc ? a.progress - b.progress : b.progress - a.progress
    );

  const handleGradeChange = (id, newGrade) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, grade: newGrade } : s))
    );
  };

  const handleFeedbackChange = (id, newFeedback) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, feedback: newFeedback } : s))
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">📈 Student Performance Tracking</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Export CSV
        </button>
      </div>

      <div className="flex gap-4 flex-wrap">
        <input
          type="text"
          placeholder="Search by student name"
          className="border p-2 rounded w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border p-2 rounded"
          value={filterCourse}
          onChange={(e) => setFilterCourse(e.target.value)}
        >
          {courses.map((course) => (
            <option key={course}>{course}</option>
          ))}
        </select>
        <button
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          onClick={() => setSortAsc(!sortAsc)}
        >
          Sort by Progress {sortAsc ? "↑" : "↓"}
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border bg-white shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Student</th>
              <th className="p-3 border">Course</th>
              <th className="p-3 border">Progress</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Grade</th>
              <th className="p-3 border">Feedback</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((s) => (
              <tr key={s.id} className="text-center hover:bg-gray-50">
                <td className="p-3 border">{s.name}</td>
                <td className="p-3 border">{s.course}</td>
                <td className="p-3 border">
                  <div className="flex items-center gap-2">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`${getProgressColor(s.progress)} h-3 rounded-full`}
                        style={{ width: `${s.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm">{s.progress}%</span>
                  </div>
                </td>
                <td className="p-3 border">
                  <span
                    className={`px-2 py-1 text-sm rounded-full ${
                      s.progress >= 85
                        ? "bg-green-100 text-green-800"
                        : s.progress >= 70
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {getStatus(s.progress)}
                  </span>
                </td>
                <td className="p-3 border">
                  <input
                    type="text"
                    value={s.grade}
                    onChange={(e) => handleGradeChange(s.id, e.target.value)}
                    className="border rounded px-2 py-1 text-center w-20"
                  />
                </td>
                <td className="p-3 border">
                  <textarea
                    value={s.feedback}
                    onChange={(e) => handleFeedbackChange(s.id, e.target.value)}
                    rows={2}
                    className="border rounded px-2 py-1 w-full"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredStudents.length === 0 && (
          <div className="text-center p-4 text-gray-500">No students found.</div>
        )}
      </div>
    </div>
  );
};

export default StudentPerformanceTracking;
