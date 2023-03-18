const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3600;

app.use(cors());
app.use(bodyParser.json());

var a = 10;
var b = 20;
console.log(a + b);

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.post("/submit", (req, res) => {
  const data = req.body;
  console.log(data);
  res.send("Data Received!");
});

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});
