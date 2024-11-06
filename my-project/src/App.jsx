import React, { useState } from "react";

const App = () => {
  const [currentquestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const nextQuestion = () => {
    const nextQuestionIndex = currentquestion + 1;

    if (nextQuestionIndex < questions.length) {
      setCurrentQuestion(nextQuestionIndex);
      setAnswer(false);
      setSelectedAnswer(null);
    } else {
      setShowScore(true); // Show score when quiz ends
    }
  };

  const handleAnswerOption = (index, isCorrect) => {
    setAnswer(true);
    setSelectedAnswer(index);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const questions = [
    {
      questionText: "What is the capital of India?",
      answerOptions: [
        { answerText: "NEW DELHI", isCorrect: true },
        { answerText: "MUMBAI", isCorrect: false },
        { answerText: "CHENNAI", isCorrect: false },
        { answerText: "BANGALORE", isCorrect: false },
      ],
    },
    {
      questionText: "What is the capital of the USA?",
      answerOptions: [
        { answerText: "NEW YORK", isCorrect: false },
        { answerText: "LOS ANGELES", isCorrect: false },
        { answerText: "CHICAGO", isCorrect: false },
        { answerText: "WASHINGTON D.C.", isCorrect: true },
      ],
    },
    {
      questionText: "What is the national animal of India?",
      answerOptions: [
        { answerText: "COW", isCorrect: false },
        { answerText: "RAT", isCorrect: false },
        { answerText: "CAT", isCorrect: false },
        { answerText: "TIGER", isCorrect: true },
      ],
    },
    {
      questionText: "What is the national bird of India?",
      answerOptions: [
        { answerText: "PARROT", isCorrect: false },
        { answerText: "HEN", isCorrect: false },
        { answerText: "EAGLE", isCorrect: false },
        { answerText: "PEACOCK", isCorrect: true },
      ],
    },
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-slate-500 w-full p-5 rounded shadow-lg max-w-lg border">
        <div className="p-2 text-white border text-center mb-2 text-xl">
          Quiz App
        </div>

        {showScore ? (
          <div className="text-white text-center">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <div>
            <div className="text-white text-center mb-3">
              {questions[currentquestion].questionText}
            </div>
            <div>
              {questions[currentquestion].answerOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerOption(index, option.isCorrect)}
                  className={`block w-full shadow mb-3 p-3 border ${
                    answer
                      ? option.isCorrect
                        ? "bg-green-200"
                        : selectedAnswer === index
                        ? "bg-red-200"
                        : ""
                      : ""
                  }`}
                >
                  {option.answerText}
                </button>
              ))}
              <button
                onClick={nextQuestion}
                className={`${
                  answer ? "bg-green-500" : "bg-green-200"
                } block w-full p-3 text-white`}
                disabled={!answer} // Disabled until an answer is selected
              >
                Next Question
              </button>
              <p className="text-white text-center mt-2">
                Question {currentquestion + 1} of {questions.length}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
