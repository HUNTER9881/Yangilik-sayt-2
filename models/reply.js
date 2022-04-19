const { Schema, model } = require("mongoose");

const DefaultSchema = Schema(
    {
        username: { type: String, required: true },
        message: { type: String, required: true },
        comment_ID: { type: Schema.ObjectId, ref: "comment", required: true },
    },
    {
        timestamps: true,
    }
);

module.exports = model("reply", DefaultSchema);
