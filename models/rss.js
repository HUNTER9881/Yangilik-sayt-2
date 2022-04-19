const { Schema, model } = require("mongoose");

const DefaultSchema = Schema(
    {
        email: { type: String, required: true, unique: true },
    },
    {
        timestamps: true,
    }
);

module.exports = model("rss", DefaultSchema);
