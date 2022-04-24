const mongoose = require("mongoose")
const db = (req,res)=>{
	try {
		mongoose.connect(process.env.MONGO_URL)
		console.log("Database Connected Successfully")
	} catch (error) {
		console.log("Something Went Wrong While Connecting To Database" + error)
		process.exit()
	}
}

module.exports = db