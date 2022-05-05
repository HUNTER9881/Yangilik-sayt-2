const express = require("express");
const routor = express.Router();
const audioController = require("../controller/audioController");
const multer = require("multer");
const md5 = require("md5");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./public/audio");
    },
    filename: function (req, file, callback) {
        callback(null, `${md5(Date.now())}${path.extname(file.originalname)}`);
    },
});
const uploads = multer({ storage: storage });

routor.post("/create", uploads.array("audio", 12), audioController.createData);
routor.get("/all", audioController.getAllData);
routor.get("/:id", audioController.getOneData);
routor.put("/:id", uploads.array("audio", 12), audioController.updateOne);
routor.delete("/:id", audioController.deleteAudio);

module.exports = routor;
