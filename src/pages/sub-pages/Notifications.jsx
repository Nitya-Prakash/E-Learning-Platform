import React, { useState } from 'react';

const NotificationsReminders = () => {
  const [notifications, setNotifications] = useState([]);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('General');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNotification = {
      id: Date.now(),
      message,
      type,
      date: new Date().toLocaleString(),
    };
    setNotifications([newNotification, ...notifications]);
    setMessage('');
    setType('General');
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Notifications & Reminders</h2>

      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <textarea
          className="w-full border p-3 rounded"
          rows="3"
          placeholder="Write your notification..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <select
          className="w-full border p-2 rounded"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="General">General</option>
          <option value="Assignment">Assignment</option>
          <option value="Exam">Exam</option>
          <option value="Class Update">Class Update</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send Notification
        </button>
      </form>

      <div className="space-y-4">
        {notifications.length === 0 ? (
          <p className="text-gray-500">No notifications yet.</p>
        ) : (
          notifications.map((note) => (
            <div key={note.id} className="border p-4 rounded shadow-sm">
              <div className="text-sm text-gray-500">{note.date}</div>
              <div className="text-lg font-semibold">{note.type}</div>
              <p className="text-gray-700 mt-2">{note.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationsReminders;
