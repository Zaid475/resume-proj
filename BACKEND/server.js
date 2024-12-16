import myexpress from "express";

import allRoutes from "./routes/index.js"
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"
import cookieParser from "cookie-parser";
const app=myexpress();
app.use(cookieParser());
app.use(myexpress.json())
app.use(cors({origin:"http://localhost:3000",credentials:true}));
dotenv.config();
mongoose.connect(process.env.MONGODBURL).then(()=>{
    console.log("mongoose connected");
})
app.get("/",(req,res)=>{
    res.send("Welcome to the Home page")
})
app.use("/api/v1",allRoutes);

app.listen(8000,()=>{
    console.log("Server is running on port no 8000")
})