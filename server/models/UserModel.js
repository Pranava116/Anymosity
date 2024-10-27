import mongoose from "mongoose";

const UserModel = mongoose.Schema({
    "username": String,
    "password": String,
})
const users = mongoose.model("users", UserModel)
export default users