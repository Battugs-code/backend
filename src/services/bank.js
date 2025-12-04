import { db } from "../db.js";

export const createAccountService = async (userid, number, balance) => {
  const response = await db.query(
    `INSERT INTO account (userid, number, balance) VALUES ($1, $2, $3) RETURNING *`,
    [userid, number, balance]
  );
  return response.rows[0];
};
export const updateAccountServive = async (
  id,
  user_id,
  account_number,
  balance
) => {
  const response = await db.query(
    `UPDATE account 
     SET username = $1, email = $2, password = $3, firstname = $4, lastname = $5 
     WHERE id = $6 
     RETURNING *`,
    [user_id, account_number, balance, id]
  );
  return response.rows[0];
};
