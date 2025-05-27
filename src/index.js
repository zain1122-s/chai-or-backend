import dotenv from "dotenv";
dotenv.config({ path: "./env" });
   
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

connectDB();






























/*

import express from "express";

const app = express()(async () => {
  try {
    mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", () => {
      console.log("ERRR", error);
      throw error;
    });
    app.listen(process.env.PORt, () => {
      console.log(`APP is listening o port ${process.env.PORt}`);
    });
  } catch (error) {
    console.log("ERROR", error);

    throw err;
  }
})();

*/
