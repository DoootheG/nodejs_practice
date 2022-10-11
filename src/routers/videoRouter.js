import express from "express";
import { handleVideo } from "../controllers/videoControllers";

const videoRouter = express.Router();

videoRouter.get("/", handleVideo);
videoRouter.get("/watch", handleVideo);

export default videoRouter;
