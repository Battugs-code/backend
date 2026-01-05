import { Router } from "express";
import { getAllMovie } from "./controller.ts";

export const movieRouter = Router();

movieRouter.get("/all",getAllMovie );
