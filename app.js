const express = require("express");
const favicon = require("express-favicon");
const path = require("path");
const port = process.env.PORT || 7081;
const app = express();

console.log("dirname is", __dirname);
// app.use(favicon(__dirname + "/build/favicon.ico"));
// the __dirname is the current directory from where the script is running
sapp.use(express.static(__dirname));
// app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile("index.html");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
