const { createServer } = require("https");
const { parse } = require("url");
const { readFileSync } = require("fs");
const next = require("next");

// const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const keyFileName = process.env.SSL_KEY_FILE;
const certFileName = process.env.SSL_CRT_FILE;

const httpsOptions = {
  key: readFileSync(keyFileName),
  cert: readFileSync(certFileName),
};

const ports = {
  http: 3000,
  https: 3443
}

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(ports.https, (err) => {
    if (err) throw err;
    console.log(`> Ready on https://localhost:${ports.https}`);
  });
});
