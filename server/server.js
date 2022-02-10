const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const questionRouter = require("./router/questionRouter");
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(cors());
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
app.use(express.json());
app.use("/", questionRouter);
