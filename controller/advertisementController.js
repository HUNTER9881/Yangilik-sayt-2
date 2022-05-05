const AdvertisementModel = require("../models/advertisement");
const CRUD_system = require("../config/crud");
const callback = require("../config/callback");
const path = require("path");
const fs = require("fs");

exports.createData = async (req, res, next) => {
  const result = new CRUD_system(AdvertisementModel, req, res, next, "image");
  result.CREATE_DATA_with_FILE();
};

exports.getAllData = async (req, res, next) => {
  const result = new CRUD_system(AdvertisementModel, req, res, next);
  result.GET_ALL_without_POPULATE();
};
exports.getOneData = async (req, res, next) => {
  const result = new CRUD_system(AdvertisementModel, req, res, next);
  result.GET_ONE_without_POPULATE();
};

exports.updateOne = async (req, res, next) => {
  const result = await AdvertisementModel.findById({ _id: req.params.id });
  const IMAGES = result.image; // []
  for (const image of IMAGES) {
    const pathFile = path.join(__dirname, "../public/advertisement/" + image);
    fs.unlink(pathFile, function (error) {
      if (error) {
        console.log("Error on removing files");
      }
      console.log("Success on removing files");
    });
  }

  // Yangi rasmni tahrirlash
  const files = req.files;
  const filesArray = [];
  for (const iterator of files) {
    const { filename } = iterator;
    filesArray.push(filename);
  }
  const updateImage = await AdvertisementModel.findByIdAndUpdate({
    _id: req.params.id,
  });
  updateImage.image = filesArray;
  updateImage
    .save()
    .then(() => {
      res.json(callback.createDataSuccess(updateImage));
    })
    .catch((error) => {
      res.json(callback.createDataError(error));
    });
};

exports.deleteOne = async (req, res, next) => {
  const { id } = req.params;
  const result = await AdvertisementModel.findById({ _id: id });
  const IMAGES = result.image; // []
  for (const image of IMAGES) {
    const pathFile = path.join(__dirname, "../public/advertisement/" + image);
    fs.unlink(pathFile, function (error) {
      if (error) {
        console.log("Error on removing files");
      }
      console.log("Success on removing files");
    });
  }

  await AdvertisementModel.findByIdAndDelete({ _id: id });
  res.json(callback.deleteOneDataSuccess());
};
