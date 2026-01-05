import { EmbeddedMovies } from "./model.ts";
import type { Request, Response } from "express";
export const getAllEmbeddedMovie = async (req: Request, res: Response) => {
  try {
    const embeddedMovie = await EmbeddedMovies.find({});
    res.send(embeddedMovie);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch embedded movie" });
  }
};
