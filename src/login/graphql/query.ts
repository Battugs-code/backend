import { Login } from "../db/login.ts";

export const userQuerys = {
  allUsers: async (_parent: any, _args: any, context: any) => {
    if (!context.user) {
      throw new Error("Unauthorized: Only logged in users can see all users.");
    }

    const users = await Login.find({});
    return users;
  },
};
