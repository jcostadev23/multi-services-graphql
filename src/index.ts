import "dotenv/config";
import mongoose from "mongoose";
import { ApolloServer } from "apollo-server";
import typeDefs from "./schema.js";
import resolvers from "./resolvers/index.js";

async function start() {
  const MONGO_URL = process.env.MONGO_URL;

  if (!MONGO_URL) {
    console.error("MONGO_URL is not defined in environment variables");
    process.exit(1);
  }

  let server: ApolloServer | null = null;

  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB");

    server = new ApolloServer({ typeDefs, resolvers });
    const { url } = await server.listen({ port: 4000 });
    console.log(`Server ready at ${url}`);

    const gracefulShutdown = async () => {
      console.log("Shutting down gracefully...");

      try {
        if (server) await server.stop();
      } catch (e) {
        console.error("Error stopping Apollo server:", e);
      }

      try {
        await mongoose.disconnect();
      } catch (e) {
        console.error("Error disconnecting mongoose:", e);
      }

      process.exit(0);
    };

    process.on("SIGINT", gracefulShutdown);
    process.on("SIGTERM", gracefulShutdown);
  } catch (err) {
    console.error("Failed to start server:", err);

    try {
      await mongoose.disconnect();
    } catch (e) {
      /* ignore */
    }
    process.exit(1);
  }
}

start();
