const { Schema, model } = require("mongoose");

const DefaultSchema = Schema(
    {
        name: {
            uz: { type: String, required: true },
            ru: { type: String, required: true },
            en: { type: String, required: true },
        },
    },
    {
        timestamps: true,
    }
);

module.exports = model("tag", DefaultSchema);
