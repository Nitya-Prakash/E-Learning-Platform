import React, { useState } from "react";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [newAnnouncement, setNewAnnouncement] = useState("");

  const handleAddAnnouncement = () => {
    if (newAnnouncement.trim() !== "") {
      const newEntry = {
        id: Date.now(),
        message: newAnnouncement,
        date: new Date().toLocaleString(),
      };
      setAnnouncements([newEntry, ...announcements]);
      setNewAnnouncement("");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Announcements</h2>
      
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newAnnouncement}
          onChange={(e) => setNewAnnouncement(e.target.value)}
          placeholder="Write your announcement here..."
          className="flex-1 border p-2 rounded"
        />
        <button
          onClick={handleAddAnnouncement}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Post
        </button>
      </div>

      <h3 className="text-lg font-medium mb-2">Previous Announcements</h3>
      <ul className="space-y-2">
        {announcements.map((item) => (
          <li
            key={item.id}
            className="border p-3 rounded shadow-sm bg-white"
          >
            <div className="text-gray-800">{item.message}</div>
            <div className="text-sm text-gray-500">{item.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Announcements;
