const user = require('../model/user-model');
exports.createUser = async (req,res)=>{
	try {
		// console.log(req.body)
		const result = await user.create(req.body)
		// console.log(result)
		res.status(200).json({
			success:true,
			message:"User Created Successfully",
			result
		})
	} catch (error) {
		res.status(400).json({
			success:false,
			message:"Something Went Wrong While Creating User",
			error
		})
	}
}

exports.getAllUser = async (req,res)=>{
	try {
		const result = await user.find()
		res.status(200).json({
			success:true,
			message:"User List",
			result
		})
	} catch (error) {
		res.status(400).json({
			success:false,
			message:"Something Went Wrong While Getting User List",
			error
		})
	}
}