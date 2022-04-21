const AudioModel = require("../models/audio");
const CRUD_system = require("../config/crud");
const callback = require('../config/callback')

exports.createData = async (req, res, next) => {
    const result = new CRUD_system(AudioModel, req, res, next, 'audio');
    result.CREATE_DATA_with_FILE();
};
exports.getAllData = async (req, res, next) => {
    const result = new CRUD_system(AudioModel, req, res, next);
    result.GET_ALL_without_POPULATE();
};
exports.getOneData = async (req, res, next) => {
    const result = new CRUD_system(AudioModel, req, res, next);
    result.GET_ONE_without_POPULATE('category_ID');
};
