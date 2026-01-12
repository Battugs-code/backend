import { Movies } from "../types/model.ts";

export const MovieMutations = {
  addMovie: async (_: any, { input }: { input: any }, context: any) => {
    if (!context.user) {
      throw new Error("You are not authenticated");
    }
    const movie = await Movies.create(input);
    return movie;
  },
  deleteMovie: async (
    _: any,
    { input }: { input: { id: string } },
    context: any
  ) => {
    if (!context.user) {
      throw new Error("You are not authenticated");
    }
    const movie = await Movies.findByIdAndDelete(input.id);
    return movie;
  },
};
