import {React,useEffect} from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const userEmail = localStorage.getItem("Quziemail");
    console.log(userEmail);
    if(!userEmail){
      navigate("./login");
    }
  },[]);
  return (
    <>
      <Navbar location={"Home"}/>
      <div className="flex flex-col bg-gray-200 m-4 gap-2 items-center justify-between min-h-[80vh]">
        <h2 className="text-[48px] flex gap-2 ">
          😎 Welcome to Quzi
        </h2>
        <p className="text-[24px]">
          Improve your language proficiency through interactive exercises and
          activities 🤩.
        </p>
        <ul className="flex gap-3 p-4 ">
          <li>
            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="/quiz">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Practice Quiz
                </h5>
              </a>
              <p class=" mb-3 font-normal text-gray-700 dark:text-gray-400">
                It's time to learn a language in such a interactive way that you want to learn more and more.
              </p>
              <a
                href="/quiz"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Start Quiz
                <svg
                  class="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </li>
          <li>
            <div class="max-w-sm flex flex-col justify-between p-6 h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="/leaderboard">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Leaderboard
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                want to see where you stand in the leaderboard? Click here to see the leaderboard.
              </p>
              <a
                href="/leaderboard"
                class="inline-flex w-fit items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                See Leaderboard
                <svg
                  class="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </li>
          <li>
            <div class="max-w-sm flex flex-col justify-between p-6 h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="/profile">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Profile
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Have a look at your profile and see how much you have progressed.
              </p>
              <a
                href="/profile"
                class="inline-flex w-fit items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                See profile
                <svg
                  class="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
