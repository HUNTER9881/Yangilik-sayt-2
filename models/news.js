const { Schema, model } = require("mongoose");

const DefaultSchema = Schema(
    {
        category_ID: { type: Schema.ObjectId, ref: "category", required: true },
        tag_ID: { type: Schema.ObjectId, ref: "tag", required: true },
        name: {
            uz: { type: String, required: true },
            ru: { type: String, required: true },
            en: { type: String, required: true },
        },
        description: {
            uz: { type: String, required: true },
            ru: { type: String, required: true },
            en: { type: String, required: true },
        },
        sitata: {
            uz: { type: String, required: true },
            ru: { type: String, required: true },
            en: { type: String, required: true },
        },
        link: {
            telegram: { type: String, required: true },
            facebook: { type: String, required: true },
            instagram: { type: String, required: true },
        },
        like: { type: Number, default: 0 },
        dislike: { type: Number, default: 0 },
        view: { type: Number, default: 0 },
        author_name: { type: String, required: true },
        favoutite_press: {
            type: Number,
            default: 0,
        },
        status: {
            type: String, 
            enum: [
                "none", "recommend", "most-read"
            ],
            default: "none"
        }
    },
    {
        timestamps: true,
    }
);

module.exports = model("news", DefaultSchema);
