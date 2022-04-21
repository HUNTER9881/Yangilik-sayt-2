const callback = require("./callback");

module.exports = class CRUD_system {
    constructor(Model, Request, Response, Next, Filepath) {
        this.Model = Model;
        this.req = Request;
        this.res = Response;
        this.next = Next;
        this.filepath = Filepath;
    }

    // @description: Fayl yuklanmagan holatda malumot yaratish
    async CREATE_DATA() {
        const MODEL = this.Model;
        const req = this.req;
        const res = this.res;
        const next = this.next;
        const defaultBody = req.body;

        const result = await MODEL.create({ ...defaultBody });
        await result
            .save()
            .then(() => {
                res.json(callback.createDataSuccess(result));
            })
            .catch((error) => {
                res.json(callback.createDataError(error));
            });
    }
    // @description: Fayl yuklangan holatda malumot yaratish
    async CREATE_DATA_with_FILE() {
        const MODEL = this.Model;
        const req = this.req;
        const res = this.res;
        const next = this.next;
        const fielpath = this.filepath
        const defaultBody = req.body;
        
        const arrayFiles = [];
        const allFiles = req.files;
        for (let item of allFiles) {
            const { filename } = item;
            arrayFiles.push(filename);
        }
        const result = await MODEL.create({ 
            ...defaultBody, 
            [fielpath]: arrayFiles
         });
        await result
            .save()
            .then(() => {
                res.json(callback.createDataSuccess(result));
            })
            .catch((error) => {
                res.json(callback.createDataError(error));
            });
    }
    // @description: Barcha malumotlarni populate siz olish
    async GET_ALL_without_POPULATE(...populate) {
        const MODEL = this.Model;
        const req = this.req;
        const res = this.res;
        const next = this.next;

        await MODEL.find()
            .populate([...populate])
            .sort({ createdAt: -1 })
            .exec((error, data) => {
                if (error) {
                    res.json(callback.getAllDataError(error));
                } else {
                    res.json(callback.getAllDataSuccess(data));
                }
            });
    }
    // @description: Bitta malumotni populate siz olish
    async GET_ONE_without_POPULATE(...populate) {
        const MODEL = this.Model;
        const req = this.req;
        const res = this.res;
        const next = this.next;
        const { id } = req.params;

        await MODEL.findById({ _id: id }).populate([...populate]).exec((error, data) => {
            if (error) {
                res.json(callback.getOneDataError(error));
            } else {
                res.json(callback.getOneDataSuccess(data));
            }
        });
    }
    // @description: Bitta malumot ichida fayl ishtirok etmasa osha malumotni faylsiz o'chirish
    async DELETE_ONE_without_FILE() {
        const MODEL = this.Model;
        const req = this.req;
        const res = this.res;
        const next = this.next;
        const { id } = req.params;

        await MODEL.findByIdAndDelete({ _id: id }).exec((error, data) => {
            if (error) {
                res.json(callback.deleteOneDataError(error));
            } else {
                res.json(callback.deleteOneDataSuccess());
            }
        });
    }
};
