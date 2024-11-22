import express from 'express'
import cors from 'cors'
import postEvent from '../models/PostModel.js'
import mongoose from 'mongoose'
import { verifyToken } from '../middleware/AuthMiddleware.js'
const router = express.Router()
router.use(express.json())
router.use(cors())

router.get("/getevents", async(req, res) => {
    try {
        const ResponseCard = await postEvent.find({})
        return res.json(ResponseCard)
    } catch (error) {
        console.log(error)
    }
})
router.post("/organisePost",verifyToken,  async(req, res) => {
    try {
        const {title, desc, date, venue} = req.body;
        const PostEvent = new postEvent({
            title: title,
            desc: desc,
            date: date,
            venue: venue
        })
        await PostEvent.save()
        return res.json({message: "Added successfully"})
    } catch (error) {
        console.log(error)
    }
})

export {router as MainPageRouter}