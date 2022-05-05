const express = require("express")
const routor = express.Router()
const userController = require("../controller/userController")



routor.post("/register", userController.register)
routor.post("/login", userController.login)
routor.get("/get_session", userController.get_session)
routor.get("/filter", userController.filterUser)
routor.get("/all", userController.userAll)
routor.get("/delate", userController.delate_session)


routor.get("/:id", userController.oneData)
routor.put("/:id", userController.updateData)


module.exports = routor