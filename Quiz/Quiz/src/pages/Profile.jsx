import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import QuizData from "../assets/QuizData";

export default function Profile() {
  const [email, setEmail] = useState(null);
  const [score, setScore] = useState([]);
  const [proficiencyLevel, setProficiencyLevel] = useState([]);
  const [Attempts, setAttempts] = useState([]);
  const [correctQuestions, setCorrectQuestions] = useState([]);
  const [totalQuestions, setTotalQuestions] = useState([]);
  const [language, setLanguage] = useState([]);

  useEffect(() => {
    // Fetch the email from local storage
    const userEmail = localStorage.getItem("Quziemail");

    if (userEmail) {
      // If email exists in local storage, set it in the state
      setEmail(userEmail);
      console.log(userEmail);
      getUserQuizData({ userEmail });
    }
  }, []);

  const getUserQuizData = async ({ userEmail }) => {
    // Fetch the email from cookies
    console.log("i am inside");
    console.log(userEmail);
    const link = "http://localhost:8000/api/userQuiz/getData/" + userEmail;
    console.log(link);
    try {
      const response = await axios.get(link, {
        headers: {
          "Content-type": "application/json",
        },
        // withCredentials: true,
      });
      if (response.status === 200) {
        const data = response.data; // This should be the JSON data returned by your API
        console.log(data);
        console.log(data.proficiencyLevel);
        setScore(data.score);
        console.log("data fetch successfully");
      } else {
        console.log("Failed to fetch data");
      }
    } catch (error) {
      console.log(error.message);
      console.log("Not able to fetch data");
    }
  };
  // useEffect(() => {
  //   getUserQuizData();
  // }, []);

  return (
    <div className="bg-gray-300">
      <Navbar location={"Profile"} />
      <div className="w-full font-serif">
        <div className="flex justify-center text-[32px] mt-4 mb-8">
          Welcome {email}
        </div>
        <div className="flex flex-row justify-around flex-wrap ">
          {score.map((score, index) => (
            <div
              key={index}
              className="flex flex-col gap-1 w-[30%] text-[16px] m-4"
            >
              <div className=" bg-gray-400 rounded-md gap-3 p-5 flex flex-col">
                <p className=" self-center text-[32px]">Quiz : {index + 1}</p>
                <div className="flex flex-row">
                  <div className="w-1/2 text-center">
                    <p>Your Score </p>
                    <p>Proficiency Level </p>
                    <p>Attempt Questions</p>
                    <p>Correct Attempts</p>
                    <p>Total Questions </p>
                  </div>
                  <div className="w-1/2 ml-8">
                    <p>
                      :{"    "}
                      {score}%
                    </p>
                    <p>
                      :{"    "}
                      {proficiencyLevel.length}
                    </p>
                    <p>
                      :{"    "}
                      {Attempts.length}
                    </p>
                    <p>
                      :{"    "}
                      {}
                    </p>
                    <p>
                      :{"    "}
                      {}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
