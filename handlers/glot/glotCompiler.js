const axios = require("axios");

exports.runPython = async (req, res) => {
  const dummyCode = { files: [{ name: "main.py", content: "print(42)" }] };
  const data = {
    stdin: req.body.stdin,
    files: req.body.files,
  };

  try {
    const runCode = await axios.post(
      "https://run.glot.io/languages/python/latest/",
      { ...data },
      {
        headers: {
          "Content-type": "application/json",
          Authorization: "Token 407e4cd4-7587-429c-b021-61937d2f5cfe",
        },
      }
    );
    // console.log("Success python : ", runCode.data);

    return res.json(runCode.data);
  } catch (error) {
    console.log("Error python : ", error.response.data);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

exports.runC = async (req, res) => {
  const dummyCode = {
    files: [
      {
        name: "main.c",
        content: `#include <stdio.h>\nint main() { \nprintf("Hello world");\n return 0;}`,
      },
    ],
  };
  const data = {
    stdin: req.body.stdin,
    files: req.body.files,
    // ...dummyCode
  };

  try {
    const runCode = await axios.post(
      "https://run.glot.io/languages/c/latest/",
      { ...data },
      {
        headers: {
          "Content-type": "application/json",
          Authorization: "Token 407e4cd4-7587-429c-b021-61937d2f5cfe",
        },
      }
    );
    // console.log("Success python : ", runCode.data);

    return res.json(runCode.data);
  } catch (error) {
    console.log("Error c : ", error.response.data);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

exports.runCpp = async (req, res) => {
  const dummyCode = {
    files: [
      {
        name: "main.cpp",
        content: `#include <iostream>\nusing namespace std;\nint main() { cout << "Enter two integers: "; return 0;}`,
      },
    ],
  };
  const data = {
    stdin: req.body.stdin,
    files: req.body.files,
    // ...dummyCode
  };

  try {
    const runCode = await axios.post(
      "https://run.glot.io/languages/cpp/latest/",
      { ...data },
      {
        headers: {
          "Content-type": "application/json",
          Authorization: "Token 407e4cd4-7587-429c-b021-61937d2f5cfe",
        },
      }
    );
    // console.log("Success python : ", runCode.data);

    return res.json(runCode.data);
  } catch (error) {
    console.log("Error cpp : ", error.response.data);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

exports.runJs = async (req, res) => {
  const dummyCode = {
    files: [
      {
        name: "main.js",
        content: "console.log(42)",
      },
    ],
  };
  const data = {
    stdin: req.body.stdin,
    files: req.body.files,
    // ...dummyCode
  };
  try {
    const runCode = await axios.post(
      "https://run.glot.io/languages/javascript/latest/",
      { ...data },
      {
        headers: {
          "Content-type": "application/json",
          Authorization: "Token 407e4cd4-7587-429c-b021-61937d2f5cfe",
        },
      }
    );
    // console.log("Success python : ", runCode.data);

    return res.json(runCode.data);
  } catch (error) {
    console.log("Error python : ", error.response.data);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

exports.runGo = async (req, res) => {
  const dummyCode = {
    files: [
      {
        name: "main.go",
        content: `package main \nimport (\n"fmt"\n)\n\nfunc main() {\nfmt.Println("Hello World!")\n}`,
      },
    ],
  };

  const data = {
    stdin: req.body.stdin,
    files: req.body.files,
    // ...dummyCode,
  };
  try {
    const runCode = await axios.post(
      "https://run.glot.io/languages/go/latest/",
      { ...data },
      {
        headers: {
          "Content-type": "application/json",
          Authorization: "Token 407e4cd4-7587-429c-b021-61937d2f5cfe",
        },
      }
    );
    // console.log("Success python : ", runCode.data);

    return res.json(runCode.data);
  } catch (error) {
    console.log("Error go : ", error.response.data, data);
    return res.status(500).json({ error: "Something went wrong" });
  }
};
