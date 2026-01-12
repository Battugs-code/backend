import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose from "mongoose";
import { typeDefs } from "./apolloServer.ts";
import { resolvers } from "./apolloServer.ts";
import jwt from "jsonwebtoken";
import { Login } from "./login/db/login.ts";
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
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req }) => {
    const token = req.headers.authorization || "";

    if (token) {
      try {
        const decoded = jwt.verify(token.replace("Bearer ", ""), "secret");
        const user = await Login.findOne({ _id: (decoded as any).id });

        if (!user) {
          console.error("User not found");
          return {};
        }

        return { user: decoded };
      } catch (error) {
        console.error("JWT verification failed:", error);
      }
    }

    return {};
  },
});

console.log(`🚀  Server ready at: ${url}`);
