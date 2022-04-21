const TagModel = require("../models/tag");
const CRUD_system = require("../config/crud");
const callback = require('../config/callback')

exports.createData = async (req, res, next) => {
    const result = new CRUD_system(TagModel, req, res, next);
    result.CREATE_DATA();
};

exports.getAllData = async (req, res, next) => {
    const result = new CRUD_system(TagModel, req, res, next);
    result.GET_ALL_without_POPULATE();
};

exports.getOneData = async (req, res, next) => {
    const result = new CRUD_system(TagModel, req, res, next);
    result.GET_ONE_without_POPULATE();
};

exports.updateOne = async (req, res, next) => {
    const result = await TagModel.findByIdAndUpdate(req.params.id);
    const { nameuz, nameru, nameen } = req.body;
    result.name.uz = nameuz;
    result.name.ru = nameru;
    result.name.en = nameen;
    await result
            .save()
            .then(() => {
                res.json(callback.updateOneDataSuccess(result));
            })
            .catch((error) => {
                res.json(callback.updateOneDataSuccess(error));
            });
};

exports.deleteOneData = async (req, res, next) => {
    const result = new CRUD_system(TagModel, req, res, next);
    result.DELETE_ONE_without_FILE()
};