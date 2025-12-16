import { Router } from "express";
import {
  createTransaction,

  createAccount,
  updateAccount,
  deleteAccount,


} from "../controllers/bank.js";

export const bankRouters = Router();

// Account-related

bankRouters.post("/accounts", createAccount);
bankRouters.put("/accounts/", updateAccount);
bankRouters.delete("/accounts", deleteAccount);


bankRouters.post("/transactions", createTransaction);
