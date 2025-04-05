import React, { useState } from "react";

const AssignmentQuizManagement = () => {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      title,
      description,
      deadline,
      fileName: file?.name,
    };

    setItems([...items, newItem]);
    setTitle("");
    setDescription("");
    setDeadline("");
    setFile(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold mb-4">Assignment & Quiz Management</h2>

      <form className="space-y-4 mb-8" onSubmit={handleUpload}>
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          className="w-full p-2 border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="datetime-local"
          className="w-full p-2 border rounded"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          required
        />
        <input
          type="file"
          className="w-full"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
          Upload
        </button>
      </form>

      <div>
        <h3 className="text-xl font-semibold mb-2">Uploaded Items</h3>
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.id} className="border p-3 rounded shadow">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <p className="text-sm text-red-500">Deadline: {item.deadline}</p>
                  <p className="text-sm">File: {item.fileName}</p>
                </div>
                <button
                  className="text-red-500 hover:underline"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AssignmentQuizManagement;
