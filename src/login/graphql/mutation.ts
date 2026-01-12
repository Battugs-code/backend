import { Login, SignUp } from "../db/login.ts";
import { ILogin, ISignUp } from "../types/user.ts";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const userMutations = {
  createUser: async (_root: any, { input }: { input: ISignUp }) => {
    if (input.password !== input.passwordConfirm) {
      return "Passwords do not match";
    }
    const hashedPassword = await bcrypt.hash(input.password, 10);
    const user = await SignUp.create({
      username: input.username,
      password: hashedPassword,
      email: input.email,
    });
    console.log(user);

    return "create user Success";
  },
  Login: async (_root: any, { input }: { input: ILogin }) => {
    const user = await Login.findOne({ username: input.username });
    if (!user) {
      throw new Error("User not found");
    }
    const validPassword = await bcrypt.compare(input.password, user.password);
    if (!validPassword) {
      throw new Error("Invalid password");
    }
    const token = jwt.sign(
      { id: user._id, username: user.username, email: user.email },
      "secret"
    );
    return `your token is ${token}`;
  },
};
