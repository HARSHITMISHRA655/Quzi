import { useState } from 'react'
import './App.css'
import Quiz from './pages/Quiz'
import Home from './pages/Home'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements([
    // <Route path="/login" element={<Login />} />,
    // <Route path="/register" element={<Register />} />,
    // <Route path="/record" element={<Record />} />,
    // <Route path="/upload" element={<Upload />} />,
    // <Route path="/transcription" element={<Transcription />} />,
    <Route path="/" element={<Home />} />,
    <Route path="/quiz" element={<Quiz />} />,
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
