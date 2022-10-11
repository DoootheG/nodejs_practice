import express from "express";
import { join, login } from "../controllers/userControllers";
import { handleHome, search } from "../controllers/videoControllers";

const globalRouter = express.Router();

globalRouter.get("/", handleHome);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;
