import mongoose from "mongoose";

const PostModel  = mongoose.Schema({
	"title": String,
	"desc": String,
	"venue" : String,
	"date": Date,
	"userID": {type: mongoose.Schema.ObjectId, reff : "users"}
}) 
const postEvent = mongoose.model("postEvent", PostModel)
export default postEvent