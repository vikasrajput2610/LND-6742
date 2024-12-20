import express from 'express'
import userRouter from './routes/user.js';
import dotenv from 'dotenv'
import cors from 'cors'
export const app=express();
dotenv.config({
    path:"./.env"
});
app.use(cors())
console.log(process.env.PORT)
 app.use(express.json())
 app.use('/user',userRouter)
app.get('/',async(req,res)=>{
    res.status(200).json({
        message:"started successfully"
    })
})

