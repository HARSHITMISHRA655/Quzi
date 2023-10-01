const express = require("express");
const router = express.Router();
const UserQuiz = require("../model/userQuiz"); // Adjust the import path as needed

const { getUserQuizzes,createOrUpdateUserQuiz } = require("../controllers/userQuizControllers");

// Define routes for userQuiz
router.get("/getData/:email", getUserQuizzes);
router.post("/addData", createOrUpdateUserQuiz);

module.exports = router;
