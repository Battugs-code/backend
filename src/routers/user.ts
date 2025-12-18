import { Router } from "express";
import {
  createUser,
  updateUser,
  getUsers,
  deleteUser,
} from "../controllers/user.js";
import { verifyJWT } from "../jwtMiddleware.js";

export const userRouters = Router();

//user tei holbootoi post route uud

userRouters.post("/create", createUser);
userRouters.post("/update", verifyJWT, updateUser);
userRouters.post("/delete", verifyJWT, deleteUser);

//user tei holbootoi get route uud

userRouters.get("/get-users", verifyJWT, getUsers);
