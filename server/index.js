import express from "express";
import connectDB from "./db/index.js";
const app = express();
connectDB();
app.listen(3000, () => {
  console.log(`Server listening to http://localhost:3000`);
});
