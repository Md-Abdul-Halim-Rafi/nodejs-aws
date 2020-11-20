const { c, cpp, node, python, java } = require("compile-run");

exports.compiler = async (sourcecode, language, input) => {
  let resultPromise;
  if (language === "c") {
    resultPromise = c.runSource(sourcecode, { stdin: input });
  } else if (language === "cpp") {
    resultPromise = cpp.runSource(sourcecode, { stdin: input });
  } else if (language === "node") {
    resultPromise = node.runSource(sourcecode, { stdin: input });
  } else if (language === "py") {
    resultPromise = python.runSource(sourcecode, { stdin: input });
  } else if (language === "java") {
    resultPromise = java.runSource(sourcecode, { stdin: input });
  }

  try {
    return resultPromise;
  } catch (error) {
    console.log("Compiling error : ", error);
    return error;
  }
};
