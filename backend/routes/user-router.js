const express = require('express')
const { createUser, getAllUser } = require('../controller/user-controller')
const router = express.Router()
router.route("/create").post(createUser)
router.route("/get-user").get(getAllUser)

module.exports = router