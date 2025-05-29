import dotenv from "dotenv";

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import ConnectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

ConnectDB();
