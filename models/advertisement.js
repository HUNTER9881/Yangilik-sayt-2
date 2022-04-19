const { Schema, model } = require("mongoose");

const DefaultSchema = Schema(
    {
        image: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

module.exports = model("advertisement", DefaultSchema);
