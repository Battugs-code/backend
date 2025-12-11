import { Router } from "express";
import {
  createTransaction,
  getTransactions,
  getTransactionsByAccountNumber,
  createAccount,
  updateAccount,
  deleteAccount,
  getAllAccounts,
  updateTransaction,
  deleteTransaction,
} from "../controllers/bank.js";

export const bankRouters = new Router();

// Account-related
bankRouters.get("/accounts", getAllAccounts);
bankRouters.post("/accounts", createAccount);
bankRouters.put("/accounts/", updateAccount);
bankRouters.delete("/accounts", deleteAccount);

// Transaction-related
bankRouters.get("/transactions", getTransactions);
bankRouters.get(
  "/accounts/:accountNumber/transactions",
  getTransactionsByAccountNumber
);
bankRouters.post("/transactions", createTransaction);
bankRouters.put("/transactions/:transactionId", updateTransaction);
bankRouters.delete("/transactions/:transactionId", deleteTransaction);
