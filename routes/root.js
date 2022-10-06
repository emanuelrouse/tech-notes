const express = require("express");
const router = express.Router();
const path = require("path");

// regex for getting data if it matches any of the three filepaths
router.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

module.exports = router;
