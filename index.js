const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 5000;
const hostname = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  const url = req.url;
  const handleServerRouter = (filePath, port) => {
    fs.readFile(filePath, (error, data) => {
      res.writeHead(port, { "content-type": "text/html" });
      res.write(data);
      res.end();
    });
  };

  if (url === "/") {
    handleServerRouter("./views/home.html", 200);
  } else if (url === "/about") {
    handleServerRouter("./views/about.html", 200);
  } else if (url === "/contact") {
    handleServerRouter("./views/contact.html", 200);
  } else {
    handleServerRouter("./views/error.html", 400);
  }
});

myServer.listen(port, hostname, () => {
  console.log(` server running port http://${hostname}:${port} `);
});
