const express = require("express")
const routor = express.Router()
const contactController = require("../controller/contactController")

routor.post("/create", contactController.createData)
routor.get("/all", contactController.getAll)
routor.get("/:id", contactController.getOneData)
routor.put("/:id", contactController.updateOne)
routor.delete("/:id", contactController.deleteOneData)


module.exports = routor