import dotenv from "dotenv";

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import ConnectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

ConnectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000,()=>{
    console.log(`server is running at ${process.env.PO}`);
    
  })
})
.catch((err)=>{
  console.log("mongodb connection failed")
  
})
