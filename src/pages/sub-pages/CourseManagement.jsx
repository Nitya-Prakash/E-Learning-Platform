import React, { useState } from "react";

const CourseManagement = () => {
  const [courses, setCourses] = useState([
    { id: 1, name: "React Basics", description: "Learn the fundamentals of React" },
    { id: 2, name: "Advanced JavaScript", description: "Deep dive into JavaScript" },
  ]);

  const [newCourse, setNewCourse] = useState({ name: "", description: "" });
  const [editingCourse, setEditingCourse] = useState(null); // Track course being edited

  


  const handleAddCourse = () => {
    if (newCourse.name && newCourse.description) {
      setCourses([...courses, { id: courses.length + 1, ...newCourse }]);
      setNewCourse({ name: "", description: "" });
    }
  };


  const [courseToDelete, setCourseToDelete] = useState(null);

  const confirmDeleteCourse = (course) => {
    setCourseToDelete(course);
  };
  
  const handleDeleteConfirmed = () => {
    setCourses(courses.filter((course) => course.id !== courseToDelete.id));
    setCourseToDelete(null);
  };
  
  const cancelDelete = () => {
    setCourseToDelete(null);
  };
  

  const handleEditCourse = (course) => {
    setEditingCourse(course);
  };

  const handleUpdateCourse = () => {
    setCourses(
      courses.map((course) =>
        course.id === editingCourse.id ? editingCourse : course
      )
    );
    setEditingCourse(null);
  };

  

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Course Management</h2>


      <div className="mb-5 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Add New Course</h3>
        <input
          type="text"
          placeholder="Course Name"
          value={newCourse.name}
          onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="text"
          placeholder="Course Description"
          value={newCourse.description}
          onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
          className="w-full p-2 border rounded mb-2"
        />
        <button onClick={handleAddCourse} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Course
        </button>
      </div>


      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-3">Existing Courses</h3>
        {courses.map((course) => (
          <div key={course.id} className="flex justify-between p-3 border-b">
            <div>
              <h4 className="font-semibold">{course.name}</h4>
              <p className="text-sm text-gray-600">{course.description}</p>
            </div>
            <div>
              <button
                onClick={() => handleEditCourse(course)}
                className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
              >
                Edit
              </button>
              <button
  onClick={() => confirmDeleteCourse(course)}
  className="bg-red-500 text-white px-3 py-1 rounded"
>
  Delete
</button>

            </div>
          </div>
        ))}
      </div>


      {editingCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg w-1/3">
            <h3 className="text-lg font-semibold mb-2">Edit Course</h3>
            <input
              type="text"
              value={editingCourse.name}
              onChange={(e) =>
                setEditingCourse({ ...editingCourse, name: e.target.value })
              }
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="text"
              value={editingCourse.description}
              onChange={(e) =>
                setEditingCourse({ ...editingCourse, description: e.target.value })
              }
              className="w-full p-2 border rounded mb-2"
            />
            <div className="flex justify-end">
              <button
                onClick={() => setEditingCourse(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateCourse}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}

{courseToDelete && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
    <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
      <h3 className="text-lg font-semibold mb-4">Confirm Deletion</h3>
      <p className="mb-4">Are you sure you want to delete <strong>{courseToDelete.name}</strong>?</p>
      <div className="flex justify-end">
        <button
          onClick={cancelDelete}
          className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
        >
          Cancel
        </button>
        <button
          onClick={handleDeleteConfirmed}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default CourseManagement;
