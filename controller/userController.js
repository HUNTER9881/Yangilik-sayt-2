const userModel = require("../models/user");
const bcrypt = require("bcryptjs");
const CRUD_system = require("../config/crud");


module.exports.register = (req, res, next) => {
    const result = new CRUD_system(userModel, req, res, next);
    result.CREATE_DATA();
};

module.exports.login = async (req, res, next) => {
    const { EMAIL, PASSWORD } = req.body;
    if (!EMAIL || !PASSWORD) {
        res.json("Email yoki parrol mavjud emas");
    }
    if (EMAIL == "" || PASSWORD == "") {
        res.json("Email yoki parrol krtilmagan");
    }
    const user = await userModel.findOne({ email: EMAIL }).select("password");
    if (!user) {
        res.json(false);
    }

    const password = user.password;
    const isMatch = await bcrypt.compare(PASSWORD, password);

    if (!isMatch || isMatch == false) {
        res.json(false);
    } else {
        const body = await userModel.findOne({ email: EMAIL }).select({
            name: 1,
            email: 1,
        });
        req.session.userAdmin = body
        req.session.checkingPage = true;
        req.session.save();
        res.json(req.session);
    }
};

module.exports.get_session = async (req, res, next) => {
    const { userAdmin } = req.session;
    res.json(userAdmin);
};

module.exports.delate_session = async (req, res, next) => {
    req.session.destroy();
    res.clearCookie("connect.sid");
    res.json("Maumot ochrildi");
};

module.exports.oneData = async (req, res, next) => {
    const result = new CRUD_system(userModel, req, res, next);
    result.GET_ONE_without_POPULATE();
};

module.exports.updateData = async (req, res, next) => {
    const { NAME, EMAIL, PASSWORD } = req.body
    const result = await userModel.findByIdAndUpdate(req.params.id);

    result.name = NAME
    result.email = EMAIL
    result.password = PASSWORD

    result
        .save()
        .then(() => {
            res.json(result);
        })
        .catch((error) => {
            res.json(error);
        });
};
