import express from "express";
import connectDB from "./db/index.js";
import testRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.controller.js";
import dotenv from "dotenv";
import createError from "http-errors";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/test", testRouter);
app.use("/api/auth", authRouter);

connectDB();
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening to http://localhost:3000`);
});

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Send error response
  res.status(err.status || 500).send({
    message: err.message,
    error: req.app.get("env") === "development" ? err : {},
  });
});
