const mongoose = require("mongoose");

const leaderboardSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  score: {
    type: Number,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Leaderboard", leaderboardSchema);
