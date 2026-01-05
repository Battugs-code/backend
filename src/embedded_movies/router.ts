import { Router } from "express";
import { getAllEmbeddedMovie } from "./controller.ts";

export const embeddedMovieRouter = Router();

embeddedMovieRouter.get("/all", getAllEmbeddedMovie);
