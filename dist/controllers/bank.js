import { createAccountService, updateAccountServive, deleteAccountService, createTransactionService, } from "../services/bank.js";
export const createAccount = async (req, res) => {
    const { userid, number, balance } = req.body;
    const user = await createAccountService(userid, number, balance);
    res.json(user);
};
// Дансны мэдээллийг шинэчлэх
export const updateAccount = async (req, res) => {
    const { userid, number, balance } = req.body;
    const user = await updateAccountServive(userid, number, balance);
    res.json({ user });
};
// Данс устгах
export const deleteAccount = async (req, res) => {
    const { userid } = req.body;
    const user = await deleteAccountService(userid);
    res.json({ user });
};
// Бүх дансыг авах
export const getAllAccounts = async (req, res) => {
    // Хэрвээ хэрэглэгчээр шүүх бол:
    const { user_id } = req.body;
    res.json({});
};
// данс авах
export const getAccountByNumber = async (req, res) => {
    const { account_number } = req.body;
    res.json({});
};
// Шинэ гүйлгээ үүсгэх
export const createTransaction = async (req, res) => {
    const { type, amount, toaccount, fromaccount } = req.body;
    const transaction = await createTransactionService(type, amount, toaccount, fromaccount);
    res.json(transaction);
};
// Бүх гүйлгээ авах
export const getTransactions = async (req, res) => {
    const { user_id } = req.query;
    const transactions = await getTransactions(user_id);
    res.json(transactions);
};
// Хэрэглэгчээр гүйлгээ авах
export const getTransactionsByUserId = async (req, res) => {
    const { user_id } = req.query;
    const transactions = await getTransactionsByUserId(user_id);
    res.json(transactions);
};
export const getTransactionsByAccountNumber = async (req, res) => {
    const { account_number } = req.query;
    const transactions = await getTransactionsByAccountNumber(account_number);
    res.json(transactions);
};
export const deleteTransaction = async (req, res) => { };
export const updateTransaction = async (req, res) => { };
//# sourceMappingURL=bank.js.map