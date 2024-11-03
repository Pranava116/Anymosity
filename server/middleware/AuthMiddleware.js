import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'

const router = express.Router()

router.use(cors())

function verifyToken(req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
     const decoded = jwt.verify(token, 'your-secret-key');
     req.userId = decoded.userId;
     next();
     } catch (error) {
     res.status(401).json({ error: 'Invalid token' });
     }
     };

export {verifyToken}
