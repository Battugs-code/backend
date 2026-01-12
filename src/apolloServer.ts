import { userMutations } from "./login/graphql/mutation.ts";
import { userQuerys } from "./login/graphql/query.ts";
import {
  LoginDefs,
  userMutationDefs,
  userQueryDefs,
} from "./login/graphql/schema.ts";
import { MovieQuerys } from "./movies/graphql/query.ts";
import { MovieMutations } from "./movies/graphql/mutation.ts";
import {
  MovieDefs,
  MovieMutationDefs,
  MovieQueryDefs,
} from "./movies/graphql/schema.ts";
import {
  CommentDefs,
  commentMutationDefs,
  CommentQuerieDefs,
} from "./comments/graphql/schema.ts";
import { commentQuerys } from "./comments/graphql/query.ts";
import { commentMutation } from "./comments/graphql/mutation.ts";

export const typeDefs = `
  ${LoginDefs}
  ${MovieDefs}
  ${CommentDefs}

  type Query {
    ${userQueryDefs}
    ${MovieQueryDefs}
    ${CommentQuerieDefs}
  }

  type Mutation {
    ${userMutationDefs}
    ${MovieMutationDefs}
    ${commentMutationDefs}
  }
`;

export const resolvers = {
  Query: {
    ...userQuerys,
    ...MovieQuerys,
    ...commentQuerys,
  },
  Mutation: {
    ...userMutations,
    ...MovieMutations,
    ...commentMutation,
  },
};
