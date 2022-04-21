const AdvertisementModel = require("../models/advertisement");
const CRUD_system = require("../config/crud");
const callback = require('../config/callback')

exports.createData = async (req, res, next) => {
    const result = new CRUD_system(AdvertisementModel, req, res, next, 'image');
    result.CREATE_DATA_with_FILE();
};
