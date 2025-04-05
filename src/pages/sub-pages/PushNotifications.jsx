import React, { useState } from "react";

const dummyNotifications = [
  {
    id: 1,
    title: "Upcoming Math Class",
    message: "Live Math class scheduled for tomorrow at 10 AM.",
    date: "2025-04-04",
    read: false,
  },
  {
    id: 2,
    title: "Assignment Due Reminder",
    message: "Submit the Physics assignment by April 6.",
    date: "2025-04-03",
    read: false,
  },
  {
    id: 3,
    title: "Admin Announcement",
    message: "Mid-term exams start from April 10. Prepare accordingly.",
    date: "2025-04-01",
    read: true,
  },
];

const PushNotifications = () => {
  const [notifications, setNotifications] = useState(dummyNotifications);

  const markAsRead = (id) => {
    const updated = notifications.map((n) =>
      n.id === id ? { ...n, read: true } : n
    );
    setNotifications(updated);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Push Notifications</h2>

      <div className="space-y-4">
        {notifications.map((note) => (
          <div
            key={note.id}
            className={`p-5 rounded shadow-md ${
              note.read ? "bg-gray-100" : "bg-yellow-100"
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{note.title}</h3>
                <p className="text-sm text-gray-700 mt-1">{note.message}</p>
                <p className="text-xs text-gray-500 mt-2">
                  Date: {note.date}
                </p>
              </div>
              {!note.read && (
                <button
                  onClick={() => markAsRead(note.id)}
                  className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                >
                  Mark as Read
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PushNotifications;
