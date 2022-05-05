const { Schema, model } = require("mongoose");

const DefaultSchema = Schema(
    {
        rating: {
            type: Number,
            enum: [
                1, 2, 3, 4, 5
            ],
            required: true
        },
        news_ID: { type: Schema.ObjectId, ref: "news", }
    },
    {
        timestamps: true,
    }
);

module.exports = model("rating", DefaultSchema);
