const express = require("express")
const routor = express.Router()
const advertisementController = require("../controller/advertisementController");
const multer = require('multer')
const md5 = require('md5')
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/advertisement')
    },
    filename: function (req, file, callback) {
        callback(null, `${md5(Date.now())}${path.extname(file.originalname)}`)
    }
})
const uploads = multer({ storage: storage })


routor.post("/create", uploads.array("IMAGES", 12), advertisementController.createData)
routor.get("/all", advertisementController.getAllData);
routor.get("/:id", advertisementController.getOneData);
routor.put("/:id", uploads.array("IMAGES", 12), advertisementController.updateOne);
routor.delete("/:id", advertisementController.deleteOne);


module.exports = routor