// src/pages/sub-pages/LectureAccess.jsx
import React, { useState } from "react";

const dummyCourses = {
  "Web Development": {
    videos: [
      { title: "Intro to HTML", url: "https://www.youtube.com/embed/qz0aGYrrlhU" },
      { title: "CSS Basics", url: "https://www.youtube.com/embed/yfoY53QXEnI" },
    ],
    liveClass: { title: "Live on React Basics", time: "2025-04-10T18:00:00" },
    materials: [
      { name: "HTML Cheat Sheet", link: "/materials/html-cheatsheet.pdf" },
      { name: "CSS Notes", link: "/materials/css-notes.pdf" },
    ],
  },
  "Data Science": {
    videos: [
      { title: "Python for Data Science", url: "https://www.youtube.com/embed/rfscVS0vtbw" },
      { title: "Pandas Library", url: "https://www.youtube.com/embed/ZyhVh-qRZPA" },
    ],
    liveClass: { title: "Live on Data Visualization", time: "2025-04-11T17:30:00" },
    materials: [
      { name: "Pandas Cheat Sheet", link: "/materials/pandas-cheatsheet.pdf" },
      { name: "DS Slides", link: "/materials/data-science-slides.pdf" },
    ],
  },
};

const LectureAccess = () => {
  const [selectedCourse, setSelectedCourse] = useState("Web Development");

  const course = dummyCourses[selectedCourse];
  const now = new Date();
  const liveTime = new Date(course.liveClass.time);
  const liveStatus =
    now < liveTime
      ? `Scheduled at ${liveTime.toLocaleString()}`
      : now > liveTime
      ? "Class Completed"
      : "Live Now!";

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Lecture Access</h2>

      <div className="mb-6">
        <label className="block mb-2 font-medium">Select Course:</label>
        <select
          className="border p-2 rounded w-full"
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
        >
          {Object.keys(dummyCourses).map((course) => (
            <option key={course}>{course}</option>
          ))}
        </select>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Recorded Lectures</h3>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
          {course.videos.map((vid, idx) => (
            <div key={idx} className="bg-white p-4 shadow rounded">
              <p className="font-medium mb-2">{vid.title}</p>
              <iframe
                src={vid.url}
                title={vid.title}
                className="w-full aspect-video rounded"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>


      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Live Class</h3>
        <div className="bg-blue-100 text-blue-900 p-4 rounded shadow">
          <p><strong>{course.liveClass.title}</strong></p>
          <p>Status: {liveStatus}</p>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Downloadable Materials</h3>
        <ul className="list-disc ml-5">
          {course.materials.map((item, idx) => (
            <li key={idx} className="mb-2">
              <a href={item.link} className="text-blue-600 underline" download>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LectureAccess;
