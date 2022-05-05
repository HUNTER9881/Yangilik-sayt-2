const express = require("express")
const routor = express.Router()
const ratingController = require("../controller/ratingController")

routor.post("/create", ratingController.createRating)


module.exports = routor