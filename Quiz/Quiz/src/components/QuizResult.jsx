import React, { useEffect, useState } from "react";
import QuizData from "../assets/QuizData";
import Navbar from "./Navbar";

const QuizResult = ({ selectedAnswers, selectedLanguage }) => {
  const [score, setScore] = useState(0);
  const [proficiencyLevel, setProficiencyLevel] = useState("");
  const [wrongAnswers,setWrongAnswers] = useState([]); // Array of question numbers with wrong answers
  const [unattemptedQuestions,setUnattemptedQuestions] = useState([]);

  // Calculate the user's score based on selected answers
  useEffect(() => {
    let correctCount = 0;
    let totalcount = 0;
    for (let i = 0; i < QuizData[selectedLanguage].length; i++) {
      // console.log(selectedAnswers[i]);
      if (selectedAnswers[i] == undefined) {
        if (!unattemptedQuestions.includes(i)) {
          setUnattemptedQuestions((prevUnattemptedQuestions) => [
            ...prevUnattemptedQuestions,
            i,
          ]);
        }
        console.log(i);
      }
      else if (
        QuizData[selectedLanguage][i].correctAnswer ==
        QuizData[selectedLanguage][i].options.indexOf(selectedAnswers[i])
      ) {
        console.log(i);
        if (QuizData[selectedLanguage][i].difficulty == "easy")
          correctCount += 1;
        else if (QuizData[selectedLanguage][i].difficulty == "medium")
          correctCount += 2;
        else correctCount += 3;
      } else {
        if (!wrongAnswers.includes(i)) {
          setWrongAnswers((prevWrongAnswers) => [
            ...prevWrongAnswers,
            i ,
          ]);
        }
        
        console.log(i);
      }
      if (QuizData[selectedLanguage][i].difficulty == "easy") totalcount += 1;
      else if (QuizData[selectedLanguage][i].difficulty == "medium")
        totalcount += 2;
      else totalcount += 3;
    }
    const userScore = (correctCount / totalcount) * 100;
    setScore(userScore);
  }, []);

  // Determine proficiency level based on the score
  useEffect(() => {
    if (score >= 90) {
      setProficiencyLevel("Fluent");
    } else if (score >= 80) {
      setProficiencyLevel("Advanced");
    } else if (score >= 65) {
      setProficiencyLevel("Intermediate");
    } else if (score >= 50) {
      setProficiencyLevel("Basic");
    } else {
      setProficiencyLevel("Beginner");
    }
  }, [score]);

  return (
    <><Navbar location={"practice"} />
    <div className="bg-gray-300 font-serif w-[100vw] h-[90vh] overflow-hidden flex justify-center items-center ">
      <div className=" bg-gray-400 rounded-md min-w-[500px] gap-3 p-5 flex flex-col">
        <p className=" self-center text-[32px]">Results</p>
        <div className="flex flex-row">
        <div className="w-1/2 text-center">
          <p>Your Score  </p>
          <p>Proficiency Level  </p>
          <p>
            Attempt Questions 
          </p>
          <p>
            Correct Attempts 
          </p>
          <p>Total Questions  </p>
        </div>
        <div className="w-1/2 ml-8">
          <p>:{"    "}{score}%</p>
          <p>:{"    "}{proficiencyLevel}</p>
          <p>
            :{"    "}
            {QuizData[selectedLanguage].length - unattemptedQuestions.length/2}
          </p>
          <p>
            :{"    "}
            {QuizData[selectedLanguage].length -
              wrongAnswers.length/2 -
              unattemptedQuestions.length/2}
          </p>
          <p>:{"    "}{QuizData[selectedLanguage].length}</p>
        </div>
        </div>
      </div>
      {/* <div>
        <h1>Wrong Answers</h1>
        <div>
          {wrongAnswers.map((wrongAnswer, index) => (
            <>
              <p className="text-[24px] py-2 px-4 border-2 rounded-md">
                {QuizData[selectedLanguage][wrongAnswer].question}
              </p>
              <ul className="flex flex-row flex-wrap justify-between gap-2">
                {QuizData[selectedLanguage][wrongAnswer].options.map(
                  (option, index) => (
                    <li
                      key={index}
                      className="w-[40%] py-2 px-4 border-2 gap-1 rounded-md"
                    >
                      <label>
                        <input
                          type="radio"
                          name="answer"
                          value={option}
                          // checked={selectedOption === option}
                          // onChange={() => onOptionSelect(option)}
                        />
                        {option}
                      </label>
                    </li>
                  )
                )}
              </ul>
            </>
          ))}
        </div>
      </div>
      <div>
        <h1>Unattempted Questions</h1>
        <div>
          {myset.map((unattemptedQuestion, index) => (
            <p key={index}>{unattemptedQuestion}</p>
          ))}
        </div>
      </div> */}
    </div>
    </>
  );
};

export default QuizResult;
