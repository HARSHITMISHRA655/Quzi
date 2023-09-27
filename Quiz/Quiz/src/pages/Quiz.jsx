import React, { useState } from 'react';
import Question from '../components/Question';
import LanguageSelection from '../components/LanguageSelection.jsx';
import QuizData from '../assets/QuizData'; // Import the language-specific quiz data
import QuizResult from '../components/QuizResult';

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [showResults, setShowResults] = useState(false);

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
    }
  };

  const submitAnswers = () => {
    setShowResults(true);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setCurrentQuestionIndex(0); // Reset to the first question when language changes
    setSelectedAnswers({}); // Clear selected answers
  };

  return (
    <div>
      { !selectedLanguage && <LanguageSelection
        languages={Object.keys(QuizData)}
        selectedLanguage={selectedLanguage}
        onSelectLanguage={handleLanguageSelect}
      />}
      {!showResults && selectedLanguage && (
        <div>
          {QuizData[selectedLanguage][currentQuestionIndex] && (
            <Question
              question={QuizData[selectedLanguage][currentQuestionIndex].question}
              options={QuizData[selectedLanguage][currentQuestionIndex].options}
              selectedOption={selectedAnswers[currentQuestionIndex]}
              onOptionSelect={handleOptionSelect}
            />
          )}
          <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={
              currentQuestionIndex === QuizData[selectedLanguage].length - 1
            }
          >
            Next
          </button>
          { currentQuestionIndex == QuizData[selectedLanguage].length - 1 && <button onClick={submitAnswers}>Submit</button>}
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
