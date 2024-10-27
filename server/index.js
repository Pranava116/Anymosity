import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'
const app = express()
const PORT = process.env.PORT
app.use(cors())



app.listen(PORT, (req, res) => {
    mongoose.connect(process.env.MONGO_URI).then(console.log("Connected to the db"))
    console.log("server runnign in port ", PORT)
})