// server.js
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = false; // Always false on cPanel
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, () => {
    console.log("🚀 Next.js app running on port " + port);
  });
});
