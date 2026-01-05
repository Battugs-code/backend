import { Comment } from "./model.ts";
import type { Request,Response } from "express";
export const getAllComment = async (req:Request, res:Response) => {
  try {
    const comment = await Comment.find({});
    res.send(comment);
  } catch (error) {
    res.status(500).send({ error: "Failed to fetch comment" });
  }
};
