import { Document, model, Schema } from "mongoose";
import { IMoviesDocument } from "../movies/model.ts";

interface IComment extends Document {
  name: string;
  email: string;
  text: string;
  date: Date;
}

const CommentSchema: Schema<IComment> = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  text: { type: String, require: true },
  date: { type: Date, require: true },
});

export const Comment = model<IComment>("comment", CommentSchema);
