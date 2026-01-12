import { Comment } from "../types/model.ts";
export const commentMutation = {
  comment: async (_root: any, { input }: { input: any }, context: any) => {
    if (!context.user) {
      throw new Error("You are not authenticated");
    }

    const userName = context.user.username;
    const userMail = context.user.email;

    await Comment.create({
      ...input,
      user: userName,
      email: userMail,
    });
    return "success to add comment";
  },
};
