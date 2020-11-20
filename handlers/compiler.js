const { c, cpp, node, python, java } = require("compile-run");

exports.compiler = async (sourcecode) => {
  let resultPromise = python.runSource(sourcecode);

  try {
      return resultPromise
  } catch (error) {
    console.log("Compiling error : ", error);
  }
};
