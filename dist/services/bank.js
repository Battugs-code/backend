import { db } from "../db.js";
export const createAccountService = async (userid, number, balance) => {
    const response = await db.query(`INSERT INTO account (userid, number, balance) VALUES ($1, $2, $3) RETURNING *`, [userid, number, balance]);
    return response.rows[0];
};
export const updateAccountServive = async (userid, number, balance) => {
    const response = await db.query(`UPDATE account 
     SET number = $1, balance = $2
     WHERE userid = $3
     RETURNING *`, [number, balance, userid]);
    return response.rows[0];
};
export const deleteAccountService = async (userid) => {
    const response = await db.query(`DELETE FROM account WHERE userid = $1 RETURNING *`, [userid]);
    return response.rows[0];
};
export const createTransactionService = async (type, amount, toaccount, fromaccount) => {
    const response = await db.query(`INSERT INTO transactions (type, amount, toaccount, fromaccount) VALUES ($1, $2, $3, $4) RETURNING *`, [type, amount, toaccount, fromaccount]);
    if (response.rows[0]) {
        const fromresponse = await db.query(`SELECT * FROM account WHERE number = $1`, [fromaccount]);
        const toresponse = await db.query(`SELECT * FROM account WHERE number = $1`, [toaccount]);
        console.log(toresponse);
        let newamount = fromresponse.rows[0].balance - amount;
        let toaccountamount = toresponse.rows[0].balance + amount;
        await db.query(`UPDATE account 
       SET balance = $1
       WHERE number = $2
       RETURNING *`, [newamount, fromaccount]);
        await db.query(`UPDATE account 
       SET balance = $1
       WHERE number = $2
       RETURNING *`, [toaccountamount, toaccount]);
    }
    return response.rows[0];
};
//# sourceMappingURL=bank.js.map