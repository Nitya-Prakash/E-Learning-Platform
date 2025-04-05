import React, { useState } from "react";

const ReportGeneration = () => {
  const [reportType, setReportType] = useState("course");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const renderSummaryCards = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-100 text-blue-800 p-4 rounded shadow">
          <h4 className="font-semibold text-lg">Total Courses</h4>
          <p className="text-xl font-bold">12</p>
        </div>
        <div className="bg-green-100 text-green-800 p-4 rounded shadow">
          <h4 className="font-semibold text-lg">Active Faculties</h4>
          <p className="text-xl font-bold">8</p>
        </div>
        <div className="bg-purple-100 text-purple-800 p-4 rounded shadow">
          <h4 className="font-semibold text-lg">Active Students</h4>
          <p className="text-xl font-bold">157</p>
        </div>
      </div>
    );
  };

  const renderReport = () => {
    switch (reportType) {
      case "course":
        return (
          <div className="bg-white p-5 rounded shadow">
            <h3 className="text-xl font-bold mb-3">📚 Course Report</h3>
            <ul className="text-gray-700 space-y-2 list-disc ml-6">
              <li>Web Development – 120 students enrolled</li>
              <li>Machine Learning – 78 students enrolled</li>
              <li>Data Structures – 60 students enrolled</li>
              <li>AI Ethics – 14 students enrolled</li>
              <li>Courses Created in this Period: 3</li>
              <li>Courses Deleted in this Period: 1</li>
            </ul>
          </div>
        );
      case "faculty":
        return (
          <div className="bg-white p-5 rounded shadow">
            <h3 className="text-xl font-bold mb-3">👩‍🏫 Faculty Activity Report</h3>
            <ul className="text-gray-700 space-y-2 list-disc ml-6">
              <li>Dr. Smith – Created 5 assignments, 2 quizzes</li>
              <li>Prof. Allen – Uploaded 3 assignments, 4 quizzes</li>
              <li>Dr. Meera – Uploaded 4 lectures, 2 video lessons</li>
              <li>Inactive Faculties: 1 (No activity in last 7 days)</li>
            </ul>
          </div>
        );
      case "student":
        return (
          <div className="bg-white p-5 rounded shadow">
            <h3 className="text-xl font-bold mb-3">🎓 Student Performance Report</h3>
            <ul className="text-gray-700 space-y-2 list-disc ml-6">
              <li>Average Assignment Score: 78%</li>
              <li>Average Quiz Score: 83%</li>
              <li>Highest Performer: Aditi Rao (92%)</li>
              <li>Most Improved: Rohan Kapoor (from 54% to 79%)</li>
              <li>Assignments Missed: 12 students</li>
              <li>Quiz Participation Rate: 94%</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">📄 Report Generation</h2>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
        <label className="font-medium">Select Report:</label>
        <select
          className="border px-3 py-2 rounded"
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
        >
          <option value="course">Course Report</option>
          <option value="faculty">Faculty Activity Report</option>
          <option value="student">Student Performance Report</option>
        </select>

        <div className="flex items-center gap-2">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border px-2 py-1 rounded"
          />
          <span>to</span>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border px-2 py-1 rounded"
          />
        </div>

        <div className="flex gap-2">
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Download PDF
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
            Export to Excel
          </button>
        </div>
      </div>


      {renderSummaryCards()}


      {renderReport()}
    </div>
  );
};

export default ReportGeneration;
