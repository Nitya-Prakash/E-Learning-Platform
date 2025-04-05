import React, { useState } from "react";

const SystemMonitoring = () => {
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  const handleToggleMaintenance = () => {
    setMaintenanceMode(!maintenanceMode);
    alert(`Maintenance mode ${!maintenanceMode ? "enabled" : "disabled"}`);
  };

  const supportRequests = [
    {
      id: 1,
      user: "john.doe@gmail.com",
      issue: "Unable to access lecture videos",
      status: "Open",
    },
    {
      id: 2,
      user: "jane.smith@yahoo.com",
      issue: "Assignment submission not working",
      status: "In Progress",
    },
    {
      id: 3,
      user: "alex123@gmail.com",
      issue: "Can't enroll in course",
      status: "Resolved",
    },
  ];

  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-2xl font-bold mb-4">🖥️ System Metrics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Platform Uptime",
              value: "99.98%",
              desc: "Updated 5 mins ago",
            },
            {
              title: "Active Users",
              value: "182",
              desc: "Real-time user count",
            },
            {
              title: "Server Status",
              value: "Online",
              desc: "All systems operational",
            },
            {
              title: "Database Status",
              value: "Connected",
              desc: "MongoDB stable",
            },
            {
              title: "API Response Time",
              value: "210 ms",
              desc: "Last 1 hr average",
            },
            {
              title: "System Load",
              value: "CPU: 27% / RAM: 55%",
              desc: "Simulated",
            },
          ].map((stat) => (
            <div key={stat.title} className="p-5 bg-gray-100 rounded shadow">
              <h4 className="text-lg font-semibold">{stat.title}</h4>
              <p className="text-2xl font-bold my-2">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">📩 Support Requests</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="p-3 border">ID</th>
                <th className="p-3 border">User</th>
                <th className="p-3 border">Issue</th>
                <th className="p-3 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {supportRequests.map((req) => (
                <tr key={req.id} className="text-center">
                  <td className="p-3 border">{req.id}</td>
                  <td className="p-3 border">{req.user}</td>
                  <td className="p-3 border">{req.issue}</td>
                  <td className="p-3 border">
                    <span
                      className={`px-2 py-1 rounded text-white text-sm ${
                        req.status === "Resolved"
                          ? "bg-green-500"
                          : req.status === "In Progress"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                    >
                      {req.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">⚙️ Platform Settings</h2>
        <div className="flex items-center justify-between p-4 bg-gray-100 rounded shadow">
          <div>
            <h4 className="text-lg font-semibold">Maintenance Mode</h4>
            <p className="text-sm text-gray-600">
              Temporarily disable access for all users.
            </p>
          </div>
          <button
            onClick={handleToggleMaintenance}
            className={`px-4 py-2 rounded text-white ${
              maintenanceMode ? "bg-red-600" : "bg-green-600"
            }`}
          >
            {maintenanceMode ? "Disable" : "Enable"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SystemMonitoring;
