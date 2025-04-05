import React, { useState } from "react";

const dummyCourses = [
  {
    id: 1,
    title: "Introduction to Web Development",
    instructor: "John Doe",
    description: "Learn HTML, CSS, and JavaScript from scratch.",
    duration: "6 weeks",
  },
  {
    id: 2,
    title: "Data Structures & Algorithms",
    instructor: "Jane Smith",
    description: "Master problem-solving and algorithmic thinking.",
    duration: "8 weeks",
  },
  {
    id: 3,
    title: "Machine Learning Basics",
    instructor: "Emily Johnson",
    description: "Understand core ML concepts with Python.",
    duration: "10 weeks",
  },
  {
    id: 4,
    title: "Database Management Systems",
    instructor: "Michael Brown",
    description: "Explore SQL, NoSQL, and database design principles.",
    duration: "5 weeks",
  },
    {
      id: 5,
      title: "Advanced JavaScript",
      instructor: "Sarah Lee",
      description: "Dive deep into closures, prototypes, async/await, and ES6+ features.",
      duration: "5 weeks",
    },
    {
      id: 6,
      title: "React for Beginners",
      instructor: "Daniel Clark",
      description: "Learn React fundamentals including components, hooks, and state management.",
      duration: "4 weeks",
    },
    {
      id: 7,
      title: "Python for Data Science",
      instructor: "Olivia Martinez",
      description: "Use Python libraries like pandas, NumPy, and matplotlib for data analysis.",
      duration: "6 weeks",
    },
    {
      id: 8,
      title: "Cloud Computing Fundamentals",
      instructor: "Kevin Wilson",
      description: "Explore AWS, Azure, and GCP basics and their real-world use cases.",
      duration: "7 weeks",
    },
    {
      id: 9,
      title: "Mobile App Development with Flutter",
      instructor: "Rachel Kim",
      description: "Build cross-platform mobile apps using Dart and Flutter.",
      duration: "6 weeks",
    },
    {
      id: 10,
      title: "Cybersecurity Essentials",
      instructor: "Alex Turner",
      description: "Learn about network security, ethical hacking, and protecting digital assets.",
      duration: "8 weeks",
    },
    {
      id: 11,
      title: "UI/UX Design Principles",
      instructor: "Megan Wright",
      description: "Understand user-centered design, wireframing, and prototyping tools.",
      duration: "5 weeks",
    },
    {
      id: 12,
      title: "Introduction to Blockchain",
      instructor: "Nathan Scott",
      description: "Learn how blockchain works and explore its applications beyond cryptocurrency.",
      duration: "6 weeks",
    },
    {
      id: 13,
      title: "Agile Project Management",
      instructor: "Laura Bennett",
      description: "Master agile frameworks like Scrum and Kanban for managing tech projects.",
      duration: "4 weeks",
    },
    {
      id: 14,
      title: "Game Development with Unity",
      instructor: "Chris Anderson",
      description: "Create 2D and 3D games using Unity and C#.",
      duration: "8 weeks",
    }
  
];

const CourseEnrollment = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleEnroll = (course) => {
    if (!enrolledCourses.find(c => c.id === course.id)) {
      setEnrolledCourses([...enrolledCourses, course]);
    }
  };

  const handleUnenroll = (id) => {
    setEnrolledCourses(enrolledCourses.filter(course => course.id !== id));
  };

  const filteredCourses = dummyCourses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-10">
      <h2 className="text-3xl font-bold text-gray-800">Course Enrolment</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for courses..."
        className="w-full md:w-1/2 px-4 py-2 border rounded shadow-sm focus:outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Available Courses */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => {
          const isEnrolled = enrolledCourses.some(c => c.id === course.id);

          return (
            <div key={course.id} className="bg-white p-5 rounded-xl shadow-md border">
              <h3 className="text-xl font-semibold mb-1">{course.title}</h3>
              <p className="text-sm text-gray-600 mb-1">Instructor: {course.instructor}</p>
              <p className="text-sm text-gray-500 mb-2">{course.description}</p>
              <p className="text-sm text-blue-700 font-medium mb-3">Duration: {course.duration}</p>
              <button
                onClick={() => handleEnroll(course)}
                disabled={isEnrolled}
                className={`px-4 py-2 rounded text-white ${
                  isEnrolled ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {isEnrolled ? "Already Enrolled" : "Enroll"}
              </button>
            </div>
          );
        })}
      </div>

      {/* Enrolled Courses */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Enrolled Courses</h2>
        {enrolledCourses.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledCourses.map(course => (
              <div key={course.id} className="bg-green-100 p-4 rounded-xl shadow-sm">
                <h4 className="text-lg font-semibold">{course.title}</h4>
                <p className="text-sm text-gray-600">Instructor: {course.instructor}</p>
                <p className="text-sm text-gray-500 mb-2">{course.description}</p>
                <button
                  onClick={() => handleUnenroll(course.id)}
                  className="text-red-600 hover:underline text-sm"
                >
                  Unenroll
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">You haven’t enrolled in any courses yet.</p>
        )}
      </div>
    </div>
  );
};

export default CourseEnrollment;
