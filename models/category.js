const { Schema, model } = require("mongoose");

const DefaultSchema = Schema(
    {
        name: {
            uz: { type: String, required: true },
            ru: { type: String, required: true },
            en: { type: String, required: true },
        },
        favoutite_press: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = model("category", DefaultSchema);
