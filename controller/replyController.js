const ReplyModel = require("../models/reply");
const CRUD_system = require("../config/crud");

exports.createData = async (req, res, next) => {
    const result = new CRUD_system(ReplyModel, req, res, next);
    result.CREATE_DATA();
};

exports.getAllData = async (req, res, next) => {
    const result = new CRUD_system(ReplyModel, req, res, next);
    result.GET_ALL_without_POPULATE();
};

exports.getOneData = async (req, res, next) => {
    const result = new CRUD_system(ReplyModel, req, res, next);
    result.GET_ONE_without_POPULATE();
};

exports.deleteOneData = async (req, res, next) => {
    const result = new CRUD_system(ReplyModel, req, res, next);
    result.DELETE_ONE_without_FILE()
};