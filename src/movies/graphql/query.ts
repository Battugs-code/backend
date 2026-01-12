import { Movies } from "../types/model.ts";

export const MovieQuerys = {
  movies: async (_root: any, _args: any, context: any) => {
    if (!context.user) {
      throw new Error("You are not authenticated");
    }
    return await Movies.find({});
  },
  searchMovie: async (_root: any, { _id }: { _id: string }, context: any) => {
    if (!context.user) {
      throw new Error("You are not authenticated");
    }
    const movies = await Movies.findOne({ _id });

    return movies;
  },
};
