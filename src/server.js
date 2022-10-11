import express, { Router } from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4001;

const app = express();
const logger = morgan("dev");
app.use(logger);

app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);

const handleListening = () =>
  console.log(`Sever listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
