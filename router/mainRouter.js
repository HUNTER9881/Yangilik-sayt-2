const express = require("express")
const routor = express.Router()
const main = require("../controller/mainController")

routor.get("/1", main.mainPage)


module.exports = routor