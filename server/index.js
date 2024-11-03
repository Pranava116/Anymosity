import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'
import { AuthRouter } from './routes/auth.js'
const app = express()
const PORT = process.env.PORT
app.use(cors())
app.use(express.json())

app.use("/auth", AuthRouter)

app.listen(PORT, (req, res) => {
    mongoose.connect(process.env.MONGO_URI).then(console.log("Connected to the db"))
    console.log("server runnign in port ", PORT)
})