import { Document, model, Schema } from "mongoose";

interface IComment extends Document {
  user: string;
  email: string;
  movie_id: string;
  text: string;
  date: Date;
}

const CommentSchema: Schema<IComment> = new Schema({
  user: { type: String, require: true },
  email: { type: String, require: true },
  movie_id: { type: String, require: true },
  text: { type: String, require: true },
  date: { type: Date, default: Date.now },
});

export const Comment = model<IComment>("comment", CommentSchema);
