import express, { json } from "express";
import PORT from "./config/port";
import cors from "cors";
import apiRouter from "./api";
import mongoose from "mongoose";
import URI from "./config/uri";
const app = express();

app.use(json());
app.use(cors());

async function connect() {
  try {
    await mongoose.connect(URI);
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

app.listen(PORT, () => {
  console.log(`App starts at: http://localhost:${PORT}`);
});
