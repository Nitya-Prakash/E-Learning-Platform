import React, { useState } from "react";

const dummyGrades = [
  {
    course: "Mathematics",
    grade: "A",
    feedback: "Excellent problem-solving skills. Keep it up!",
    progress: 95,
  },
  {
    course: "Physics",
    grade: "B+",
    feedback: "Good understanding of concepts. Improve speed.",
    progress: 80,
  },
  {
    course: "Computer Science",
    grade: "A-",
    feedback: "Great performance in coding assignments.",
    progress: 88,
  },
  {
    course: "English Literature",
    grade: "B",
    feedback: "Strong interpretation but needs deeper analysis.",
    progress: 75,
  },
];

const GradesFeedback = () => {
  const [selectedCourse, setSelectedCourse] = useState("All");

  const filteredGrades =
    selectedCourse === "All"
      ? dummyGrades
      : dummyGrades.filter(item => item.course === selectedCourse);

  const handleExport = () => {
    alert("PDF export coming soon!");
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Grades & Feedback</h2>
        <button
          onClick={handleExport}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Export as PDF
        </button>
      </div>

      <div className="mb-4">
        <label className="font-semibold mr-3">Filter by Course:</label>
        <select
          className="p-2 border rounded"
          value={selectedCourse}
          onChange={e => setSelectedCourse(e.target.value)}
        >
          <option value="All">All</option>
          {dummyGrades.map((item, idx) => (
            <option key={idx} value={item.course}>
              {item.course}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-4">
        {filteredGrades.map((item, idx) => (
          <div key={idx} className="bg-white shadow-md p-5 rounded">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-blue-700">
                {item.course}
              </h3>
              <button className="text-sm text-blue-600 hover:underline">
                View Detailed Report
              </button>
            </div>
            <p className="mt-2">
              <span className="font-medium">Grade:</span>{" "}
              <span className="text-green-600 font-semibold">{item.grade}</span>
            </p>
            <p className="mt-1">
              <span className="font-medium">Feedback:</span>{" "}
              <span className="text-gray-700 italic">{item.feedback}</span>
            </p>

            <div className="mt-3">
              <div className="text-sm font-medium mb-1 text-gray-700">
                Overall Progress
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-green-500 h-3 rounded-full"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
              <p className="text-right text-sm text-gray-600 mt-1">
                {item.progress}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GradesFeedback;
