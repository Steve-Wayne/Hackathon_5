import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import csrf from 'lusca').csrf;

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  }),
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(csrf());

import userRouter from "./routes/user.routes.js";
import chatbotRouter from "./routes/chatbot.routes.js";

app.use("/api/v1/users", userRouter);
app.use("/api/v1/chatbot", chatbotRouter);

export { app };