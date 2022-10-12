import express from "express";
import {
  // handleVideo,
  upload,
  see,
  edit,
  deleteVideo,
} from "../controllers/videoControllers";

const videoRouter = express.Router();

// videoRouter.get("/", handleVideo);
videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;
