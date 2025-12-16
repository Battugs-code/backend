export declare const createUserService: (username: string, email: string, password: string) => Promise<any>;
export declare const getUsersService: () => Promise<any[]>;
export declare const updateUserService: (id: string, username: string, email: string, password: string, firstname: string, lastname: string) => Promise<any>;
export declare const getUserByIdService: (id: string) => Promise<any>;
export declare const deleteUserService: (id: string) => Promise<any>;
export declare const getUserAccountsService: (id: string) => Promise<any[]>;
export declare const getUserTransactionsService: (id: string) => Promise<any[]>;
//# sourceMappingURL=user.d.ts.map