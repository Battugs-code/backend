import { Router } from "express";
import { getAllComment } from "./controller.ts";

export const commentRouter = Router();

commentRouter.get("/all", getAllComment);
