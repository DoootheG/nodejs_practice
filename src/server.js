import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method}, ${req.url}`);
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not allowed!</h1>");
  } else {
    next();
  }
};
const handleHome = (req, res) => {
  return res.send("Boom!");
};

app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome);

const handleListening = () =>
  console.log(`Sever listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
