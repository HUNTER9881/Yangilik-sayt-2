const express = require("express")
const routor = express.Router()
const rssController = require("../controller/rssController")

routor.post("/create", rssController.createData)
routor.get("/all", rssController.getAllData)
routor.get("/:id", rssController.getOneData)
routor.delete("/:id", rssController.deleteOneData)


module.exports = routor