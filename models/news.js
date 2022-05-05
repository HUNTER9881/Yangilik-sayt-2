const { Schema, model } = require("mongoose");

const DefaultSchema = Schema(
    {
        category_ID: [{ type: Schema.ObjectId, ref: "category", }],
        tag_ID: [{ type: Schema.ObjectId, ref: "tag", }],
        name: {
            uz: { type: String },
            ru: { type: String },
            en: { type: String },
        },
        description: {
            uz: { type: String, },
            ru: { type: String, },
            en: { type: String, },
        },
        sitata: {
            uz: { type: String, },
            ru: { type: String, },
            en: { type: String, },
        },
        link: {
            telegram: { type: String, },
            facebook: { type: String, },
            instagram: { type: String, },
        },
        like: { type: Number, default: 0 },
        dislike: { type: Number, default: 0 },
        view: { type: Number, default: 0 },
        rating: { type: Number, default: 0 },
        author_name: { type: String, },
        images: [{ type: String,  }],
        favoutite_press: {
            type: Number,
            default: 0,
        },
        status: {
            type: String, 
            enum: [
                "none", "recommend", "most-read"
            ],
        }
    },
    {
        timestamps: true,
    }
);

module.exports = model("news", DefaultSchema);
