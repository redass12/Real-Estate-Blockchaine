// const next = require("next");
// const routes = require("./routes");
// const app = next({ dev: process.env.NODE_ENV !== "production" });
// const handler = routes.getRequestHandler(app);

// const { createServer } = require("http");
// app.prepare().then(() => {
//   createServer(handler).listen(3000);
// });

const { createServer } = require("http");
const next = require("next");

const app = next({
  dev: process.env.NODE_ENV !== "production",
});

const PORT = process.env.PORT || 3000;

const routes = require("./routes");
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  createServer(handler).listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Ready on localhos: ${PORT}`);
  });
});
