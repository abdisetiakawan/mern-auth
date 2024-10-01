import express from "express";
import connectDB from "./db/index.js";
import testRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import dotenv from "dotenv";
import createError from "http-errors";

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use("/test", testRouter);
app.use("/api/auth", authRouter);

// Connect to database
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening to http://localhost:3000`);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  const statusCode = err.status || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    error: message,
    statusCode: statusCode,
  });
});
