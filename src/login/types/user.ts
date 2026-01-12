import { Document } from "mongoose";

export interface ILogin {
  username: string;
  password: string;
}
export interface ISignUp {
  username: string;
  password: string;
  email: string;
  passwordConfirm: string;
}
export interface ILoginDocument extends ILogin, Document {}
export interface ISignUpDocument extends ISignUp, Document {}
