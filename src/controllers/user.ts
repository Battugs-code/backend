import {
  createUserService,
  updateUserService,
  getUsersService,
  getUserByIdService,
  deleteUserService,
  getUserAccountsService,
  getUserTransactionsService,
} from "../services/user.js";
import type { Request, Response } from "express";
import { verifyJWT } from "../jwtMiddleware.js";
export const createUser = async (req:Request,res:Response) => {
  const { username, email, password } = req.body;

  const user = await createUserService(username, email, password);

  res.json(user);
};

export const updateUser = async (req:Request,res:Response) => {
  const { id, username, email, password, firstname, lastname } = req.body;

  const user = await updateUserService(
    id,
    username,
    email,
    password,
    firstname,
    lastname
  );

  res.json(user);
};

export const getUsers = async (req:Request,res:Response) => {
  const {username ,email,password} =req.body;
   const users = await getUsersService(username,email,password);
  res.json(users);
};


export const deleteUser = async (req:Request,res:Response) => {
  const { username } = req.body;
  const user = await deleteUserService(username);
  res.json(user);
};
