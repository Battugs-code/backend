import mongoose, { model, Schema } from "mongoose";
import { ILoginDocument } from "../types/user.ts";

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: false },
});

export const Login =
  mongoose.models.login || model<ILoginDocument>("login", UserSchema);
export const SignUp = Login;
