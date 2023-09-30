import React, { useState, useEffect } from "react";
import Question from "../components/Question";
import LanguageSelection from "../components/LanguageSelection.jsx";
import QuizData from "../assets/QuizData"; // Import the language-specific quiz data
import QuizResult from "../components/QuizResult";

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [previousQuestionIndex, setPreviousQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [timer, setTimer] = useState(30); // Initial timer value in seconds
  const [startQuiz, setStartQuiz] = useState(false);

  useEffect(() => {
    let interval;

    if (!startQuiz) return; // Don't run the timer if no language is selected
    // Start the timer when a new question is displayed
    if (currentQuestionIndex < QuizData[selectedLanguage].length) {
      // setTimer(30); // Reset the timer to 30 seconds for each question
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    // Clear the timer and submit the quiz when the timer reaches 0
    if (
      timer === 0 &&
      currentQuestionIndex == QuizData[selectedLanguage].length - 1
    ) {
      clearInterval(interval);
      submitAnswers();
    } else if (
      timer === 0 &&
      currentQuestionIndex < QuizData[selectedLanguage].length
    ) {
      setTimer(30);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setPreviousQuestionIndex(currentQuestionIndex);
    } else if (previousQuestionIndex + 1 == currentQuestionIndex) {
      setTimer(30);
      setPreviousQuestionIndex(currentQuestionIndex);
    }

    // Clean up the timer interval when the component unmounts or when the question changes
    return () => clearInterval(interval);
  }, [currentQuestionIndex, startQuiz, timer]);

  const handleOptionSelect = (selectedOption) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: selectedOption,
    });
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < QuizData[selectedLanguage].length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setPreviousQuestionIndex(currentQuestionIndex);
    }
  };

  const submitAnswers = () => {
    setShowResults(true);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  const handleStartQuiz = () => {
    setCurrentQuestionIndex(0);
    setCurrentQuestionIndex(0); // Reset to the first question when language changes
    setSelectedAnswers({}); // Clear selected answers
    setShowResults(false); // Reset results display
    startQuiz(true);
  };

  return (
    <div>
      {!startQuiz && (
        <LanguageSelection
          languages={Object.keys(QuizData)}
          selectedLanguage={selectedLanguage}
          onSelectLanguage={handleLanguageSelect}
          setStartQuiz={setStartQuiz}
          onClickStart={handleStartQuiz}
        />
      )}
      {!showResults && startQuiz && (
        <div className=" w-[100vw] h-[100vh] overflow-hidden bg-gray-100 flex items-center justify-center">
          <div className="bg-gray-400 min-w-[600px] max-w-[800px] min-h-[300px] font-serif p-4 rounded-lg">
            <div className="flex flex-row w-full justify-between my-5">
              <p className="py-2 px-4  ">
                Question No. : <b>{currentQuestionIndex + 1}</b>/{QuizData[selectedLanguage].length}{" "}
              </p>
              <p className="py-2 px-4  ">
                Time Remaining: <b>{timer}</b> seconds
              </p>
            </div>
            {QuizData[selectedLanguage][currentQuestionIndex] && (
              <Question
                question={
                  QuizData[selectedLanguage][currentQuestionIndex].question
                }
                options={
                  QuizData[selectedLanguage][currentQuestionIndex].options
                }
                selectedOption={selectedAnswers[currentQuestionIndex]}
                onOptionSelect={handleOptionSelect}
              />
            )}
            {/* <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
            Previous
          </button> */}
            <div className="flex justify-end gap-5 mt-2">
              <button
                onClick={handleNext}
                className="bg-gray-500 py-2 px-4 rounded-lg disabled:bg-gray-300 hover:disabled:cursor-not-allowed"
                disabled={
                  currentQuestionIndex === QuizData[selectedLanguage].length - 1
                }
              >
                Next
              </button>
              {currentQuestionIndex ===
                QuizData[selectedLanguage].length - 1 && (
                <button
                  className="bg-gray-500 py-2 px-4 rounded-lg"
                  onClick={submitAnswers}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      {showResults && (
        <QuizResult
          selectedAnswers={selectedAnswers}
          selectedLanguage={selectedLanguage}
        />
      )}
    </div>
  );
};

export default QuizPage;
