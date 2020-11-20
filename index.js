const express = require("express");
const bodyParser = require("body-parser");

const { compiler } = require("./handlers/compiler");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Go to this path /compile");
});

app.post("/compile", async (req, res) => {
  const result = await compiler(req.body.code);  
  res.json(result);
});

app.listen(PORT, (err) => {
  if (err) throw err;

  console.log(`Server is listening http://localhost:${PORT}`);
});
