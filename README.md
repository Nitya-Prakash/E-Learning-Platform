📚 E-Learning Platform

🔍 Project Overview

The E-Learning Platform is a comprehensive web application designed to streamline digital education for students, faculty, and administrators. With role-based dashboards, the system offers unique functionalities tailored to each user type. This project is built using React (Vite) for the frontend and Node.js with Express for the backend.

⚙️ Tech Stack

Frontend: React (Vite), Tailwind CSS, React Router

Backend: Node.js, Express.js, MongoDB

Tools: MongoDB Compass, Postman, Visual Studio Code

🧑‍💼 Admin Portal Features

🧑‍🏫 User Management

Register faculties via a form with name, email, and role fields. Data is sent to the backend and stored in MongoDB.

Assign tasks to faculties by selecting them from a dropdown and entering the task description.

📚 Course Management

Create Course: Input course name, description, and faculty assigned.

Edit Course: Update any of the course fields dynamically.

Delete Course: Includes a confirmation prompt before deleting.

📢 Announcements

Post notices with title and description.

Displayed in both Faculty and Student Dashboards.

📈 Report Generation

Generate CSV/PDF reports on course enrollments, student progress, and faculty tasks.

Charts for visual analytics using libraries like Chart.js.

🖥️ System Monitoring

Logs admin, faculty, and student activity.

Settings toggle for features (e.g. assignment auto-delete).

Support request management panel.

👨‍🏫 Faculty Portal Features

📚 Course Management

Upload course modules as video links, PDF files, and descriptions.

Edit or update any uploaded content.

📝 Assignment and Quiz Management

Upload assignments/quizzes with deadlines.

Backend checks current date and removes expired entries automatically.

📊 Student Performance Tracking

Displays student-wise progress.

Faculty can grade submissions, leave remarks, and filter by criteria.

🔔 Notifications and Reminders

Faculty can push announcements and reminders.

Includes scheduling (send later), categorization (e.g. "exam", "class update").

👨‍🎓 Student Portal Features

🎓 Course Enrollment

Browse through a list of all courses.

Click Enroll to join. Adds to their personal dashboard.

🎥 Lecture Access

View recorded lectures (YouTube links or local uploads).

Download PDFs, lecture notes, and view live class info.

📝 Assignment Submission

View pending assignments.

Upload solution as PDF before the deadline.

🧪 Quiz & Exam Participation

Take live or time-based quizzes.

Immediate results and graphical score feedback.

📈 Grades & Feedback

Shows current grades.

Detailed feedback on each submission.

Charts to track academic progress.

🔔 Push Notifications

Alerts for deadlines, reminders, and admin announcements.

📁 Project Structure

├── src
│   ├── components
│   │   ├── Sidebar.jsx / FacultySidebar.jsx / StudentSidebar.jsx
│   ├── pages
│   │   ├── AdminDashboard.jsx
│   │   ├── FacultyDashboard.jsx
│   │   ├── StudentDashboard.jsx
│   │   ├── LoginPage.jsx
│   │   └── sub-pages (CourseManagement.jsx, AssignmentSubmission.jsx, etc.)
├── backend
│   ├── models (MongoDB Schemas)
│   ├── routes (API endpoints)
│   ├── controllers (Business logic)
│   └── server.js (Main entry point)

🚀 Getting Started

🔧 Prerequisites

Node.js (v18+)

MongoDB

🖥️ Running the Application

# Backend
cd backend
npm install
npm start

# Frontend
cd e-learning-platform
npm install
npm run dev

🔮 Future Enhancements

Real-time chat between students and faculty

Integration with Zoom/Google Meet for live classes

Secure login and authentication (JWT)

Role-based access protection for routes

📌 Notes

The UI is responsive, built with TailwindCSS.

Backend APIs are modular and RESTful.

MongoDB is used with Mongoose ODM.

Folder structures follow best practice separation of concerns.

🧠 Contributing

Pull requests are welcome. For major changes, open an issue first. Remember to run tests and lint your code.

📜 License

MIT