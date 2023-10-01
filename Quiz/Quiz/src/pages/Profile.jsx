import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Cookies from "js-cookie";
import axios from "axios";

export default function Profile() {
  const [email, setEmail] = useState(null);

  useEffect(() => {
    // Fetch the email from local storage
    const userEmail = localStorage.getItem("Quziemail");

    if (userEmail) {
      // If email exists in local storage, set it in the state
      setEmail(userEmail);
      console.log(userEmail)
      getUserQuizData({userEmail});
    }
  }, []);

  const getUserQuizData = async (userEmail) => {
    // Fetch the email from cookies
    console.log("i am inside");
    console.log(userEmail);
    try {
      const response = await axios.get(
        `http://localhost:8000/api/userQuiz/getData`,
        {
          params: {
            email: userEmail,
          },
          headers: {
            "Content-type": "application/json",
          },
          // withCredentials: true,
        }
      );
      if (response.status===200) {
        const data = response.data; // This should be the JSON data returned by your API
        console.log(data);
        console.log("data fetch successfully");
      } else {
        console.log("Failed to fetch data");
      }
    } catch (error) {
      console.log(error.message);
      console.log("Not able to fetch data");
    }
  }
  // useEffect(() => {
  //   getUserQuizData();
  // }, []);

  return (
    <>
      <Navbar location={"Profile"} />
      <div>
        <p className="text-2xl font-bold text-center mt-10">
          Welcome {email}
        </p>
        <p className="text-xl font-bold text-center mt-10">
          Your Quiz Data
        </p>
      </div>
    </>
  );
}
