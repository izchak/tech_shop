const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("client"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "login.html"));
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
