const { Schema, model } = require("mongoose");

const DefaultSchema = Schema(
    {
        category_ID: { type: Schema.ObjectId, ref: "category", required: true },
        name: {
            uz: { type: String, required: true },
            ru: { type: String, required: true },
            en: { type: String, required: true },
        },
        audio: [{ type: String, required: true }],
        audio_time: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

module.exports = model("audio", DefaultSchema);
