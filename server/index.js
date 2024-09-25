import express from "express";
import connectDB from "./db/index.js";
import testRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.controller.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

connectDB();

app.use("/test", testRouter);
app.use("/api/auth", authRouter);

app.use(express.json());
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening to http://localhost:3000`);
});
