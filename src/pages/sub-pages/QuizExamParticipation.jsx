import React, { useState } from "react";

const dummyQuizzes = [
  {
    id: 1,
    title: "Math Quiz - Algebra",
    course: "Mathematics",
    questions: [
      {
        question: "What is the value of x in 2x + 3 = 7?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
      },
      {
        question: "What is the square root of 16?",
        options: ["2", "4", "8", "16"],
        correctAnswer: "4",
      },
    ],
  },
  {
    id: 2,
    title: "Physics Quiz - Motion",
    course: "Physics",
    questions: [
      {
        question: "What is the unit of force?",
        options: ["Newton", "Watt", "Joule", "Pascal"],
        correctAnswer: "Newton",
      },
      {
        question: "Which law explains action and reaction?",
        options: [
          "First Law",
          "Second Law",
          "Third Law",
          "Law of Gravitation",
        ],
        correctAnswer: "Third Law",
      },
    ],
  },
];

const QuizExamParticipation = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [submittedQuizzes, setSubmittedQuizzes] = useState({});
  const [score, setScore] = useState(null);

  const handleStartQuiz = (quiz) => {
    setSelectedQuiz(quiz);
    setAnswers({});
    setScore(null);
  };

  const handleOptionSelect = (qIndex, option) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: option }));
  };

  const handleSubmit = () => {
    let correctCount = 0;
    selectedQuiz.questions.forEach((q, i) => {
      if (answers[i] === q.correctAnswer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setSubmittedQuizzes((prev) => ({ ...prev, [selectedQuiz.id]: true }));
  };

  const handleBack = () => {
    setSelectedQuiz(null);
    setScore(null);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Quiz & Exam Participation</h2>

      {!selectedQuiz ? (
        <div className="space-y-6">
          {dummyQuizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="border p-4 rounded bg-white shadow-md"
            >
              <h3 className="text-xl font-semibold">{quiz.title}</h3>
              <p className="text-gray-600">Course: {quiz.course}</p>
              {submittedQuizzes[quiz.id] ? (
                <p className="text-green-600 font-medium mt-2">
                  Quiz Already Attempted
                </p>
              ) : (
                <button
                  onClick={() => handleStartQuiz(quiz)}
                  className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Start Quiz
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">{selectedQuiz.title}</h3>
          {selectedQuiz.questions.map((q, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded">
              <p className="font-medium mb-2">
                Q{index + 1}. {q.question}
              </p>
              <div className="space-y-1">
                {q.options.map((opt, i) => (
                  <div key={i}>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={opt}
                        onChange={() => handleOptionSelect(index, opt)}
                        disabled={score !== null}
                      />
                      {opt}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {score === null ? (
            <button
              onClick={handleSubmit}
              className="bg-green-600 text-white px-4 py-2 rounded mt-4 hover:bg-green-700"
            >
              Submit Quiz
            </button>
          ) : (
            <div className="mt-4 space-y-2">
              <p className="text-lg font-semibold text-green-700">
                Your Score: {score} / {selectedQuiz.questions.length}
              </p>
              <button
                onClick={handleBack}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Back to Quiz List
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizExamParticipation;
