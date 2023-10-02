const express = require("express");
const userRouter = require("./authRoutes");
const leaderboardData = require("./leaderboardRoutes");
const userQuizData = require("./userQuizRoutes");

const { connectDB } = require("../data/database");

connectDB();
var router = new express.Router();

router.get("/", (req, res) => {
  res.send("Index Routes rendered !");
});

router.use("/user", userRouter);
router.use("/leaderboard", leaderboardData);
router.use("/userQuiz", userQuizData);
module.exports = router;

//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