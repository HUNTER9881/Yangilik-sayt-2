const Contact = require("../models/contact");
const CRUD_system = require("../config/crud");
const callback = require('../config/callback')

exports.createData = async (req, res, next) => {
    const result = new CRUD_system(Contact, req, res, next);
    result.CREATE_DATA();
};

exports.getOneData = async (req, res, next) => {
    const result = new CRUD_system(Contact, req, res, next);
    result.GET_ONE_without_POPULATE();
};

exports.deleteOneData = async (req, res, next) => {
    const result = new CRUD_system(Contact, req, res, next);
    result.DELETE_ONE_without_FILE();
};

exports.updateOne = async (req, res, next) => {
    const { check } = req.body;
    const { id } = req.params;

    await Contact.findByIdAndUpdate({ _id: id }).exec((error, data) => {
        if (error) throw error;
        else {
            if (check == "1") {
                data.status = "access"
                data.save()
                    .then(() => {
                        res.json(callback.createDataSuccess(data));
                    })
                    .catch((error) => {
                        res.json(callback.createDataError(error));
                    });
            }
            if (check == "2") {
                data.status = "no-access"
                data.save()
                    .then(() => {
                        res.json(callback.createDataSuccess(data));
                    })
                    .catch((error) => {
                        res.json(callback.createDataError(error));
                    });
            }
            if (check == "3") {
                data.status = "process"
                data.save()
                    .then(() => {
                        res.json(callback.createDataSuccess(data));
                    })
                    .catch((error) => {
                        res.json(callback.createDataError(error));
                    });
            }
        }
    });
};


exports.getAll = async (req, res, next) => {
    const { check } = req.query;
    await Contact.find({
        status: {
            $eq: check
        }
    }).exec((error, data) => {
        if (error) throw error;
        else {
            res.json(callback.getAllDataSuccess(data));
        }
    });
};


