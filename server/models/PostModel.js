import mongoose from "mongoose";

const PostModel  = mongoose.Schema({
	"title": String,
	"desc": String,
	"venue" : String,
	"date": Date,
	"userID": mongoose.Types.ObjectId
}) 
const postEvent = mongoose.model("postEvent", PostModel)
export default postEvent