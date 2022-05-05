const express = require("express");
const routor = express.Router();
const newController = require("../controller/newController");
const multer = require("multer");
const md5 = require("md5");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./public/news");
    },
    filename: function (req, file, callback) {
        callback(null, `${md5(Date.now())}${path.extname(file.originalname)}`);
    },
});
const uploads = multer({ storage: storage });

routor.post("/create", uploads.array("images", 12), newController.createData);
routor.get("/all", newController.getAll);
routor.get("/:id", newController.getOne);
routor.put("/:id", uploads.array("images", 12), newController.updateData);
routor.delete("/:id", newController.deleteNews);

module.exports = routor;
