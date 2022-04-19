const { Schema, model } = require("mongoose");

const DefaultSchema = Schema(
    {
        username: { type: String, required: true },
        message: { type: String, required: true },
        news_ID: { type: Schema.ObjectId, ref: "news", required: true },
    },
    {
        timestamps: true,
    }
);

module.exports = model("comment", DefaultSchema);
