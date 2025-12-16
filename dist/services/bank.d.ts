export declare const createAccountService: (userid: string, number: string, balance: number) => Promise<any>;
export declare const updateAccountServive: (userid: string, number: string, balance: number) => Promise<any>;
export declare const deleteAccountService: (userid: string) => Promise<any>;
export declare const createTransactionService: (type: string, amount: number, toaccount: string, fromaccount: string) => Promise<any>;
//# sourceMappingURL=bank.d.ts.map