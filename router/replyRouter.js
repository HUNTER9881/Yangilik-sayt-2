const express = require("express")
const routor = express.Router()
const replyController = require("../controller/replyController")

routor.post("/create", replyController.createData)
routor.get("/all", replyController.getAllData)
routor.get("/:id", replyController.getOneData)
routor.delete("/:id", replyController.deleteOneData)


module.exports = routor