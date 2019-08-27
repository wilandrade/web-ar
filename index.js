const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.resolve(__dirname)));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/images", (req, res) => {
  res.sendFile(path.join(__dirname + "/images.html"));
});

app.get("/video", (req, res) => {
  res.sendFile(path.join(__dirname + "/video.html"));
});

app.get("/sun", (req, res) => {
  res.sendFile(path.join(__dirname + "/sun.html"));
});

app.get("/dino", (req, res) => {
  res.sendFile(path.join(__dirname + "/dino.html"));
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("app listening on port:", port);
});
