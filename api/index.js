import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_STRING)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("message: ", err);
  });

const app = express();

app.use(express.json());

const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
