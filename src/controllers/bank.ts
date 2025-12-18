import {
  createAccountService,
  updateAccountServive,
  deleteAccountService,
  createTransactionService,
} from "../services/bank.js";
import type { Request, Response } from "express";
export const createAccount = async (req:Request,res:Response) => {
  const { userid, number, balance } = req.body;
  const user = await createAccountService(userid, number, balance);
  res.json(user);
};

// Дансны мэдээллийг шинэчлэх
export const updateAccount = async (req:Request,res:Response) => {
  const { userid, number, balance } = req.body;
  const user = await updateAccountServive(userid, number, balance);
  res.json({ user });
};

// Данс устгах
export const deleteAccount = async (req:Request,res:Response) => {
  const { userid } = req.body;
  const user = await deleteAccountService(userid);

  res.json({ user });
};

// данс авах
export const getAccountByNumber = async (req:Request,res:Response) => {
  const { account_number } = req.body;
  res.json({});
};

// Шинэ гүйлгээ үүсгэх

export const createTransaction = async (req:Request,res:Response) => {
  const { type, amount, toaccount, fromaccount } = req.body;
  const transaction = await createTransactionService(
    type,
    amount,
    toaccount,
    fromaccount
  );
  res.json(transaction);
};



