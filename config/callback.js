module.exports = {
    // malumot yataish uchun callback 
    createDataSuccess: function (item) {
        return ({
            message: "Successfully created",
            data: item,
        })
    },
    createDataError: function (item) {
        return ({
            message: "Error created",
            data: item,
        })
    },

    // hamma malumotni olish  uchun callback 
    getAllDataSuccess: function (item) {
        return ({
            message: "Successfully get all data",
            data: item,
        })
    },
    getAllDataError: function (item) {
        return ({
            message: "Error  get all data",
            data: item,
        })
    },

    // alohida malumotni olish  uchun callback 
    getOneDataSuccess: function (item) {
        return ({
            message: "Successfully get one data",
            data: item,
        })
    },
    getOneDataError: function (item) {
        return ({
            message: "Error  get one data",
            data: item,
        })
    },


    // alohida malumotni tahrirlash uchun callback 
    updateOneDataSuccess: function (item) {
        return ({
            message: "Successfully update data",
            data: item,
        })
    },
    updateOneDataError: function (item) {
        return ({
            message: "Error update data",
            data: item,
        })
    },


    // alohida malumotni o'chirish uchun callback 
    deleteOneDataSuccess: function (item) {
        return ({
            message: "Successfully delete data",
            data: [],
        })
    },
    deleteOneDataError: function (item) {
        return ({
            message: "Error delete data",
            data:item,
        })
    },
}