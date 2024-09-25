import express from "express";
import connectDB from "./db/index.js";
import router from "./routes/user.route.js";
const app = express();
connectDB();

app.get("/test", router);

app.listen(3000, () => {
  console.log(`Server listening to http://localhost:3000`);
});
