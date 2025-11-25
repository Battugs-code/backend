import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { userRouters } from "./routers/user.js";
import { bankRouters } from "./routers/bank.js";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5500", "http://127.0.0.1:5500", "http://localhost:3000"],
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

app.use("/", (req, res, next) => {
  const userId = req.cookies.user;

  if (userId && req.path === "/login.html") {
    return res.redirect("/bank.html");
  }

  if (!userId && req.path === "/bank.html") {
    return res.redirect("/login.html");
  }

  if (userId) {
    const user = {
      email: "admin@gmail.com",
      firstName: "1321",
    };

    req.user = user;
  }

  next();
});

app.use(express.static("frontend"));

app.use("/user", userRouters);
app.use("/bank", bankRouters);

app.listen(3000, () => {
  console.log("express app running at 3000");
});
