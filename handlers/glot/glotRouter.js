const glotRouter = require("express").Router();
const { runPython, runC, runCpp, runJs, runGo } = require("./glotCompiler");

glotRouter.post("/python", runPython);
glotRouter.post("/c", runC);
glotRouter.post("/cpp", runCpp);
glotRouter.post("/js", runJs);
glotRouter.post("/go", runGo);

module.exports = glotRouter;
