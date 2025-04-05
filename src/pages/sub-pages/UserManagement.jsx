import React, { useState } from "react";

const UserManagement = () => {
  const [faculties, setFaculties] = useState([]);
  const [facultyName, setFacultyName] = useState("");
  const [facultyEmail, setFacultyEmail] = useState("");
  const [facultyDept, setFacultyDept] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [task, setTask] = useState("");

  const handleRegisterFaculty = (e) => {
    e.preventDefault();
    if (!facultyName || !facultyEmail || !facultyDept) {
      alert("Please fill in all fields.");
      return;
    }

    const newFaculty = {
      id: faculties.length + 1,
      name: facultyName,
      email: facultyEmail,
      department: facultyDept,
      tasks: [],
    };

    setFaculties([...faculties, newFaculty]);
    setFacultyName("");
    setFacultyEmail("");
    setFacultyDept("");
  };

  const handleAssignTask = () => {
    if (!selectedFaculty || !task) {
      alert("Please select a faculty and enter a task.");
      return;
    }

    setFaculties(
      faculties.map((faculty) =>
        faculty.id === parseInt(selectedFaculty)
          ? { ...faculty, tasks: [...faculty.tasks, task] }
          : faculty
      )
    );

    setTask("");
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">User Management</h2>

      <div className="bg-white p-4 shadow rounded mb-6">
        <h3 className="text-xl font-semibold mb-3">Register Faculty</h3>
        <form onSubmit={handleRegisterFaculty} className="space-y-4">
          <input
            type="text"
            placeholder="Faculty Name"
            value={facultyName}
            onChange={(e) => setFacultyName(e.target.value)}
            className="border p-2 w-full rounded"
            required
          />
          <input
            type="email"
            placeholder="Faculty Email"
            value={facultyEmail}
            onChange={(e) => setFacultyEmail(e.target.value)}
            className="border p-2 w-full rounded"
            required
          />
          <input
            type="text"
            placeholder="Department"
            value={facultyDept}
            onChange={(e) => setFacultyDept(e.target.value)}
            className="border p-2 w-full rounded"
            required
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
            Register Faculty
          </button>
        </form>
      </div>

      <div className="bg-white p-4 shadow rounded mb-6">
        <h3 className="text-xl font-semibold mb-3">Assign Task to Faculty</h3>
        <select
          className="border p-2 w-full rounded mb-3"
          onChange={(e) => setSelectedFaculty(e.target.value)}
          value={selectedFaculty}
        >
          <option value="">Select Faculty</option>
          {faculties.map((faculty) => (
            <option key={faculty.id} value={faculty.id}>
              {faculty.name} ({faculty.department})
            </option>
          ))}
        </select>
        <textarea
          placeholder="Enter Task"
          className="border p-2 w-full rounded mb-3"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="bg-green-500 text-white p-2 rounded w-full" onClick={handleAssignTask}>
          Assign Task
        </button>
      </div>

      <div className="bg-white p-4 shadow rounded">
        <h3 className="text-xl font-semibold mb-3">Registered Faculties</h3>
        {faculties.length === 0 ? (
          <p>No faculties registered.</p>
        ) : (
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Department</th>
                <th className="border p-2">Tasks</th>
              </tr>
            </thead>
            <tbody>
              {faculties.map((faculty) => (
                <tr key={faculty.id} className="text-center">
                  <td className="border p-2">{faculty.name}</td>
                  <td className="border p-2">{faculty.email}</td>
                  <td className="border p-2">{faculty.department}</td>
                  <td className="border p-2">
                    {faculty.tasks.length > 0 ? (
                      <ul className="list-disc list-inside">
                        {faculty.tasks.map((task, index) => (
                          <li key={index}>{task}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>No tasks assigned</p>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default UserManagement;
