const express = require("express")
const routor = express.Router()
const categoryController = require("../controller/categoryController")

routor.post("/create", categoryController.createData)
routor.get("/all", categoryController.getAllData)
routor.get("/:id", categoryController.getOneData)
routor.put("/:id", categoryController.updateOne)
routor.delete("/:id", categoryController.deleteOneData)


module.exports = routor