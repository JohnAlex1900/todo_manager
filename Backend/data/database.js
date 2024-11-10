import mongoose from "mongoose";
import { config } from "dotenv";

config({ path: "../.env" });

//dataBase
export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "Todo_Backend",
    })
    .then(() => {
      console.log("DataBase Connected");
    })
    .catch((err) => {
      console.log(err);
    });
};
