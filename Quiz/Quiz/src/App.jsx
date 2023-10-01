import { useState } from 'react'
import './App.css'
import Quiz from './pages/Quiz'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Register from './pages/Register'
import Login from './pages/Login'
import Leaderboard from './pages/Leaderboard'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/register" element={<Register />} />,
    <Route path="/login" element={<Login />} />,
    <Route path="/" element={<Home />} />,
    <Route path="/quiz" element={<Quiz />} />,
    <Route path="/leaderboard" element={<Leaderboard />} />,
    <Route path="/profile" element={<Profile />} />,
  ])
);

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
