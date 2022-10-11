import express from "express";
import { handleUser } from "../controllers/userControllers";

const userRouter = express.Router();

userRouter.get("/edit", handleUser);

export default userRouter;
