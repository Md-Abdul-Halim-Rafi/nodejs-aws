const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")

const { compiler } = require("./handlers/compiler");
const glotRouter = require("./handlers/glot/glotRouter");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors())

app.use("/run", glotRouter)

app.get("/", (req, res) => {
  res.send("Go to this path /compile");
});

app.post("/compile", async (req, res) => {
  const lang = req.body.lang

  if (lang !== "c" && lang !== "cpp" && lang !== "node" && lang !== "py" && lang !== "java") {
    return res.status(400).json({ error: "Bad format" })
  }

  const result = await compiler(req.body.code, lang, req.body.input);  
  return res.json(result);
});

app.listen(PORT, (err) => {
  if (err) throw err;

  console.log(`Server is listening http://localhost:${PORT}`);
});
