import React from "react";
import Navbar from "./Navbar";
import Img from "../assets/pngegg.png"

const LanguageSelection = ({
  languages,
  selectedLanguage,
  onSelectLanguage,
  setStartQuiz,
  onClickStart,
}) => {
  const handlestart = () => {
    setStartQuiz(true);
    onClickStart();
  };

  return (
    <>
    <div className="flex w-[100vw] flex-row overflow-hidden">
      
      <div className="flex w-1/2">
        <img
          width={"1000vw"}
          height={"100vh"}
          src={Img}
          alt=""
          srcset=""
        />
      </div>
      <div className=" bg-amber-600 w-1/2 flex flex-col justify-center items-center h-[100vh] overflow-hidden gap-4">
        <div className="text-white text-[20px] w-3/4">
          <p className="text-[32px]">Instructions:</p>
          <ul className="list-disc">
            <li>There will be total of 10 questions. </li>
            <li>Easy, Medium and Hard questions will consist of 1 Marks,3 Marks and 5 Marks each.</li>
            <li>Time will be 15 sec for each question. </li>
          </ul>
        </div>
        <h2 className="text-[32px] text-white">CHOOSE A LANGUAGE</h2>
        <select
          className="h-[32px] w-[300px] border-r-2"
          value={selectedLanguage}
          onChange={(e) => onSelectLanguage(e.target.value)}
        >
          <option value="">Select a Language</option>
          {languages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
        <button
          className="bg-white text-black py-1 px-2 rounded-md"
          onClick={handlestart}
          disabled={!selectedLanguage}
        >
          <b>Start Quiz</b>
        </button>
      </div>
    </div>
    </>
  );
};

export default LanguageSelection;
