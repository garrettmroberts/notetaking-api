import express from "express";
import mongoose from "mongoose";
import routes from "./routes";

const port = 3000;
const app = express();

app.use(express.json());

app.use(routes);

const start = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017");
    app.listen(port, () => {
      console.log(`App listening at http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
