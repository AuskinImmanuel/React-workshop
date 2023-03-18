const express = require("express");
const cors = require("cors");

const app = express();
const port = 3600;

app.use(cors());

var a = 10;
var b = 20;
console.log(a + b);

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});
