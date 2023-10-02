const express = require("express");
const router = express.Router();

const { addData, getData } = require("../controllers/leaderboardControllers");

router.post("/addData", addData);
router.get("/getData", getData);

module.exports = router;
