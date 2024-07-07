import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import multer from 'multer';

import userRouter from "./Route/userRoute.js"
import activityRouter from "./Route/activityRoute.js"
import forgotPasswordRouter from "./Route/forgotPassword.js"
import feedbackRouter from "./Route/feedbackRoute.js"

dotenv.config()
const app = express()
const port = process.env.PORT || 8000
const upload = multer();
mongoose.set('strictQuery', true);

//middlewares
app.use(express.json())
app.use(cors())

//db config
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
}, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("DB Connected")
    }
})

//api endpoints
app.use("/api/user", userRouter)
app.use("/api/activity", activityRouter)
app.use("/api/forgotPassword", forgotPasswordRouter)
app.use("/api/feedback", feedbackRouter);
//listen
app.listen(port, () => console.log(`Listening on localhost:${port}`))