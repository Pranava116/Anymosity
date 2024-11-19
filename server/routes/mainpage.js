import express from 'express'
import cors from 'cors'
import postEvent from '../models/PostModel.js'
const router = express.Router()
router.use(express.json())
router.use(cors())

router.get("/getevents", async(req, res) => {
    try {
        
    } catch (error) {
        
    }
})
router.post("/organisePost", async(req, res) => {
    try {
        const {title, desc, date, venue} = req.body;
        const PostEvent = new postEvent({
            title: title,
            desc: desc,
            date: date,
            venue: venue
        })
        await PostEvent.save()
        
    } catch (error) {
        
    }
})

export {router as MainPageRouter}