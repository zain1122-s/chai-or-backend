import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const ConnectDB= async ()=>{
    try {
       const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       console.log(`\n mongoDb connected !! Db HOST: ${connectionInstance.connection.host}`);
    //    console.log(connectionInstance);      
    } catch (error) {
        console.log("mongoDb connection error",error);
        process.exit(1)
        
    }
}
export default ConnectDB