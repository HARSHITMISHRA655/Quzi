import React, { useEffect, useState } from 'react';
import QuizData from '../assets/QuizData';

const QuizResult = ( {selectedAnswers,selectedLanguage} ) => {
  const [score, setScore] = useState(0);
  const [proficiencyLevel, setProficiencyLevel] = useState('');

  // Calculate the user's score based on selected answers
  useEffect(() => {
    let correctCount = 0;
    let totalcount = 0;
    for (let i = 0; i < QuizData[selectedLanguage].length; i++) {
      if (QuizData[selectedLanguage][i].correctAnswer == QuizData[selectedLanguage][i].options.indexOf(selectedAnswers[i])) {
        if(QuizData[selectedLanguage][i].difficulty == "easy")
          correctCount += 1;
        else if(QuizData[selectedLanguage][i].difficulty == "medium")
          correctCount += 2;
        else
          correctCount += 3;
      }
      if(QuizData[selectedLanguage][i].difficulty == "easy")
            totalcount += 1;
    else if(QuizData[selectedLanguage][i].difficulty == "medium")
        totalcount += 2;
    else
        totalcount += 3;
    }
    const userScore = (correctCount / totalcount) * 100;
    setScore(userScore);
    console.log(totalcount);
  }, [selectedAnswers]);

  // Determine proficiency level based on the score
  useEffect(() => {
    if (score >= 90) {
      setProficiencyLevel('Fluent');
    } else if (score >= 80) {
      setProficiencyLevel('Advanced');
    } else if (score >= 65) {
      setProficiencyLevel('Intermediate');
    } else if (score >= 50) {
      setProficiencyLevel('Basic');
    } else {
      setProficiencyLevel('Beginner');
    }
  }, [score]);

  return (
    <div>
      <h2>Quiz Result</h2>
      <p>Your Score: {score}%</p>
      <p>Proficiency Level: {proficiencyLevel}</p>
    </div>
  );
};

export default QuizResult;
