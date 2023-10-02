import React, { useEffect, useState, useMemo, useCallback } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import QuizData from "../assets/QuizData";

export default function Profile({selectedLanguage,score,proficiencyLevel,attempts,correctAttempts,totalQuestions}) {

  useEffect(() => {
    // calculateScore();
    sendResultToServer();
  }, []);

  const sendResultToServer = useCallback(async () => {
    const userEmail = localStorage.getItem("Quziemail");
    try {
      // console.log(userEmail,score,proficiencyLevel,QuizData[selectedLanguage].length - unattemptedQuestions.length ,QuizData[selectedLanguage].length - wrongAnswers.length - unattemptedQuestions.length ,QuizData[selectedLanguage].length,selectedLanguage);
      // console.log(wrongAnswers.length,unattemptedQuestions.length)
      console.log(score,proficiencyLevel,attempts,correctAttempts,totalQuestions,selectedLanguage);
      const data = await axios.post(
        "http://localhost:8000/api/userQuiz/addData",
        {
          email: userEmail,
          score: score,
          proficiencyLevel: proficiencyLevel,
          attempts: attempts ,
          correctAttempts: correctAttempts ,
          totalQuestions: totalQuestions,
          language: selectedLanguage,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
        );
        console.log("Data sent successfully");
    } catch (error) {
      console.log(error);
      console.log("Unable to send data");
    }
  }, []);

  // Memoized values
  // const memoizedSelectedLanguage = useMemo(() => {
  //   // Calculate the selected language based on your logic
  //   return "english"; // Replace with your logic
  // }, []);

  // const memoizedUnattemptedQuestions = useMemo(() => {
  //   return unattemptedQuestions;
  // }, [unattemptedQuestions]);

  // const memoizedWrongAnswers = useMemo(() => {
  //   return wrongAnswers;
  // }, [wrongAnswers]);

  return (
    <><Navbar location={"Practice"} />
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
            {attempts}
          </p>
          <p>
            :{"    "}
            {correctAttempts}
          </p>
          <p>:{"    "}{totalQuestions}</p>
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

