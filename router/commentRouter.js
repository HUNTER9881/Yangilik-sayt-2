const express = require("express")
const routor = express.Router()
const commentController = require("../controller/commentController")

routor.post("/create", commentController.createData)
routor.get("/all", commentController.getAllData)
routor.get("/:id", commentController.getOneData)
routor.delete("/:id", commentController.deleteOneData)


module.exports = routor