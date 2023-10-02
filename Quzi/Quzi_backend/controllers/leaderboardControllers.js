const Leaderboard = require("../model/leaderboard");

module.exports.addData = async (req, res, next) => {
  try {
    const { email, score, language } = req.body;

    const newEntry = new Leaderboard({
      email,
      score,
      language,
    });

    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (error) {
    next(error);
  }
};

module.exports.getData = async (req, res, next) => {
  try {
    const leaderboard = await Leaderboard.find()
      .sort({ score: -1 }) // Sort by score in descending order
      .limit(10); // Limit to the top 10 entries

    res.json(leaderboard);
  } catch (error) {
    next(error);
  }
};
