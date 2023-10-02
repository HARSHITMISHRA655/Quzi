const mongoose = require("mongoose");

const userQuizSchema = new mongoose.Schema({
  email: String,
  score: [],
  proficiencyLevel: [],
  attempts: [],
  correctAttempts: [],
  totalQuestions: [],
  language: [],
  createdAt: Date,
});

module.exports = mongoose.model("UserQuiz", userQuizSchema);
