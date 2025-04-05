
import React, { useState } from "react";

const CourseManagement = () => {
  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pdf, setPdf] = useState(null);
  const [video, setVideo] = useState(null);

  const handleAddCourse = (e) => {
    e.preventDefault();

    const newCourse = {
      id: Date.now(),
      title,
      description,
      pdf,
      video,
    };
    

    setCourses([...courses, newCourse]);
    setTitle("");
    setDescription("");
    setPdf(null);
    setVideo(null);
  };

  const handleDeleteCourse = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this course?");
    if (confirmDelete) {
      setCourses(courses.filter(course => course.id !== id));
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Faculty Course Management</h2>

      <form onSubmit={handleAddCourse} className="bg-white p-6 rounded shadow mb-6">
        <div className="mb-4">
          <label className="block mb-1 font-medium">Course Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Upload PDF</label>
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setPdf(e.target.files[0])}
            className="w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Upload Video</label>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideo(e.target.files[0])}
            className="w-full"
          />
        </div>

        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add Course
        </button>
      </form>

<div>
  <h3 className="text-xl font-semibold mb-4">Course Content</h3>
  {courses.length === 0 ? (
    <p className="text-gray-500">No courses added yet.</p>
  ) : (
    <ul className="space-y-4">
      {courses.map((course) => (
        <li key={course.id} className="bg-gray-100 p-4 rounded shadow-sm">
          <h4 className="font-bold text-lg">{course.title}</h4>
          <p className="text-sm text-gray-700 mb-2">{course.description}</p>


          {course.pdf && (
            <div className="mb-2">
              <p className="text-sm text-gray-600 mb-1">PDF Preview:</p>
              <embed
                src={URL.createObjectURL(course.pdf)}
                type="application/pdf"
                width="100%"
                height="300px"
              />
            </div>
          )}

  
          {course.video && (
            <div className="mb-2">
              <p className="text-sm text-gray-600 mb-1">Video Preview:</p>
              <video
                src={URL.createObjectURL(course.video)}
                controls
                width="100%"
                height="300px"
              />
            </div>
          )}

          <div className="mt-2 flex gap-4">
            <button className="text-blue-500 hover:underline">Edit</button>
            <button
              className="text-red-500 hover:underline"
              onClick={() => handleDeleteCourse(course.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  )}
</div>

    </div>
  );
};

export default CourseManagement;
