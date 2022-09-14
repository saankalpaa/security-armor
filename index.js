const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
// add router in express app
app.use("/", router);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/check", (req, res) => {
  res.send("Hello check");
});

router.get("/test", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

router.post("/check", (req, res) => {
  res.send("yes");
});

app.listen(3000, () => {
  console.log("Started on PORT 3000");
});
