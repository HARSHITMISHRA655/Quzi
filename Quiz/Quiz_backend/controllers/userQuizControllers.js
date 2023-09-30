const UserQuiz = require("../model/userQuiz"); // Adjust the import path as needed

// Get all user quizzes
const getUserQuizzes = async (req, res, next) => {
  const { email } = req.body;
  try {
    const userQuizzes = await UserQuiz.find({ email });
    res.json(userQuizzes);
  } catch (error) {
    next(error);
  }
};

// Create or update a user quiz
const createOrUpdateUserQuiz = async (req, res, next) => {
  const { email, score, proficiencyLevel, attempts, correctAttempts, totalQuestions, language } = req.body;
  try {
    // Check if the user already has a quiz record
    let userQuiz = await UserQuiz.findOne({ email });

    if (!userQuiz) {
      // User doesn't have a quiz record, create a new one
      userQuiz = new UserQuiz({
        email,
        score : [score],
        proficiencyLevel : [proficiencyLevel],
        attempts : [attempts],
        correctAttempts : [correctAttempts],
        totalQuestions : [totalQuestions],
        language : [language],
        createdAt : Date.now(),
      });
    } else {
      // User already has a quiz record, append the new quiz to the quizHistory
      userQuiz.score.push(score);
      userQuiz.proficiencyLevel.push(proficiencyLevel);
      userQuiz.attempts.push(attempts);
      userQuiz.correctQuestions.push(correctAttempts);
      userQuiz.totalQuestions.push(totalQuestions);
      userQuiz.language.push(language);
      userQuiz.createdAt = Date.now();
    }

    await userQuiz.save();
    res.status(201).json(userQuiz);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUserQuizzes,
  createOrUpdateUserQuiz
};