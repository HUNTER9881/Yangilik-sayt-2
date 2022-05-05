const AudioModel = require("../models/audio");
const CRUD_system = require("../config/crud");
const callback = require("../config/callback");
const fs = require("fs");
const path = require("path");

exports.createData = async (req, res, next) => {
  const result = new CRUD_system(AudioModel, req, res, next, "audio");
  result.CREATE_DATA_with_FILE();
};
exports.getAllData = async (req, res, next) => {
  const result = new CRUD_system(AudioModel, req, res, next);
  result.GET_ALL_without_POPULATE("category_ID");
};
exports.getOneData = async (req, res, next) => {
  const result = new CRUD_system(AudioModel, req, res, next);
  result.GET_ONE_without_POPULATE("category_ID");
};

exports.updateOne = async (req, res, next) => {
  const { id } = req.params;
  const { categoryID, nameuz, nameru, nameen, audio_time } = req.body;
  // malumotni saqlash
  async function saveData(parametr) {
    await parametr
      .save()
      .then(() => {
        res.json(callback.createDataSuccess(parametr));
      })
      .catch((error) => {
        res.json(callback.createDataError(error));
      });
  }
  const result = await AudioModel.findById({ _id: id }).select("audio");
  const AUDIOS = result.audio; // []
  for (const audio of AUDIOS) {
    const pathFile = path.join(__dirname, "../public/audio/" + audio);
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
  const updateImage = await AudioModel.findByIdAndUpdate({ _id: id });
  updateImage.audio = filesArray;
  updateImage.category_ID = categoryID;
  updateImage.name.uz = nameuz;
  updateImage.name.ru = nameru;
  updateImage.name.en = nameen;
  updateImage.audio_time = audio_time;
  saveData(updateImage);
};

exports.deleteAudio = async (req, res, next) => {
  const { id } = req.params;
  const result = await AudioModel.findById({ _id: id }).select("audio");
  const IMAGES = result.audio; // []
  for (const image of IMAGES) {
    const pathFile = path.join(__dirname, "../public/audio/" + image);
    fs.unlink(pathFile, function (error) {
      if (error) {
        console.log("Error on removing files");
      }
      console.log("Success on removing files");
    });
  }
  await AudioModel.findByIdAndDelete({ _id: id });
  res.json(callback.deleteOneDataSuccess());
};
