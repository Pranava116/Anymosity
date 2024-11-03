import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import users from '../models/UserModel.js'
import { verifyToken } from '../middleware/AuthMiddleware.js'
const router = express.Router()
router.use(express.json())
router.use(cors())

//Router to post register values

router.post("/register", async(req, res) => {
    try {
        const {username, password} = req.body
        const response = await users.findOne({username: username})
        if(!response){
            const hashedPassword = await bcrypt.hash(password, 10)
            const newUser = new users({
                username: username,
                password: hashedPassword
            })
            await newUser.save()
            return res.json({message: "The user added successfully"})
        }
        else{
            return res.json({message: "The user already exists"})
        }
    } catch (error) {
        console.log(error)
    }
})

router.post("/login", async(req, res) => {
    const {username, password} = req.body;
    
    try {
        const user = await users.findOne({username: username})
        if(!user){
            return res.json({message: "The user does not exists"})
        }
        const isValidPassword = await bcrypt.compare(password, user.password)
        if(!isValidPassword){
            return res.json({message: "The password is wrong"})
        }
        const token = jwt.sign({UserID: user._id}, "fun", {expiresIn: '1h'})
        res.json({token, userID: user._id})
    } catch (error) {
        console.log(error)
    }
})


export {router as AuthRouter}
