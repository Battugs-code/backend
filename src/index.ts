import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose from "mongoose";
import { Movies } from "./movies/model.ts";
import { typeDefs } from "./graphql/schema.ts";
import { resolvers } from "./graphql/resolver.ts";





mongoose
  .connect(
    "mongodb+srv://fqtugs19_db_user:bywdCW1otOgnoKuK@backend-lesson.hs8srsx.mongodb.net/sample_mflix?appName=backend-lesson"
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err: Error) => {
    console.error("MongoDB connection error:", err);
  });

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 }
});

console.log(`🚀  Server ready at: ${url}`);