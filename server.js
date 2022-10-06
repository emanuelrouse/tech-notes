const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3500;

// Tell express to look in the public folder for static files
app.use("/", express.static(path.join(__dirname, "/public")));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
