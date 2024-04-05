import express, { json } from "express";
import cors from "cors";
import { apiRouter } from "./api";
import mongoose from "mongoose";
const app = express();

app.use(json());
app.use(cors());

async function connect() {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/back-end-api");
    console.log("DB connected");
  } catch (error: any) {
    console.log(error.message);
  }
}
connect();

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Hello world!" });
});

app.listen(5000, () => {
  console.log(`App starts at: http://localhost:${5000}`);
});
