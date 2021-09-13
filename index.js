const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;

const app = express();

app.get("/", (req, res) => {
  console.log("req url is: " + req.url + " and req method is: " + req.method);
  res.sendFile(path.join(__dirname, "pages/index.html"));
});

app.get("/about", (req, res) => {
  console.log("req url is: " + req.url + " and req method is: " + req.method);
  res.sendFile(path.join(__dirname, "pages/about.html"));
});
app.get("/contact-me", (req, res) => {
  console.log("req url is: " + req.url + " and req method is: " + req.method);
  res.sendFile(path.join(__dirname, "pages/contact-me.html"));
});
app.get("*", (req, res) => {
  console.log("req url is: " + req.url + " and req method is: " + req.method);
  res.sendFile(path.join(__dirname, "pages/404.html"));
});

app.listen(PORT, () => {
  console.log(`listening for requst on localhost:${PORT}`);
});

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   // will give / or /about or /contact-me or ??error?? and method
//   console.log("req url is: " + req.url + " and req method is: " + req.method);

//   // set header content type
//   res.setHeader("Content-Type", "text/html");

//   let path = "./pages/";
//   switch (req.url) {
//     case "/":
//       path += "index.html";
//       res.statusCode = 200;
//       break;
//     case "/about":
//       path += "about.html";
//       res.statusCode = 200;
//       break;
//     case "/contact-me":
//       path += "contact-me.html";
//       res.statusCode = 200;
//       break;
//     default:
//       path += "404.html";
//       res.statusCode = 404;
//       break;
//   }

//   //send a html file and read it back
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       console.log(err);
//       res.end();
//     } else {
//       res.write(data);
//       res.end();
//     }
//   });
// });

// const PORT = process.env.PORT || 8080;

// server.listen(PORT, () => {
//   console.log(`listening for requst on localhost:${PORT}`);
// });
