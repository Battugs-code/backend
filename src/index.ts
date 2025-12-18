import express from "express";
import type { Request, Response } from "express";
import { userRouters } from "./routers/user.js";
import { bankRouters } from "./routers/bank.js";
import { connectDb } from "./db.js";
import { authRouters } from "./routers/auth.js";

const app = express();

app.use(express.json());

app.use("/user", userRouters);
app.use("/bank", bankRouters);
app.get("/example", (req: Request, res: Response) => {
  res.send("fjask");
});
app.use("/auth", authRouters);
await connectDb();

app.listen(3000, () => {
  console.log("express app running at 3000");
});
