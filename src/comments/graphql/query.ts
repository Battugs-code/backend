import { Comment } from "../types/model.ts";

export const commentQuerys = {
  comments: async (_parent: any, _args: any, context: any) => {
    if (!context.user) {
      throw new Error("Unauthorized: Only logged in users can see all users.");
    }

    const comments = await Comment.find({});
    return comments;
  },
  filterUserComment: async (_parent: any, { user }: { user: string }) => {
    const comments = await Comment.find({ user: user });
    return comments;
  },
};
