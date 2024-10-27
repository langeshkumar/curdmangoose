import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION);
        console.log("Connected mongoose Successfully..!");
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

export default dbConnection;
