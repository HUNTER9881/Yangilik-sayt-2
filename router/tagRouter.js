const express = require("express")
const routor = express.Router()
const tagController = require("../controller/tagController")

routor.post("/create", tagController.createData)
routor.get("/all", tagController.getAllData)
routor.get("/:id", tagController.getOneData)
routor.put("/:id", tagController.updateOne)
routor.delete("/:id", tagController.deleteOneData)


module.exports = routor