const { Schema, model } = require("mongoose");

const DefaultSchema = Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        message: { type: String, required: true },
        status: { type: String, enum: ["access", "no-access", "process"], default: "no-access" },
    },
    {
        timestamps: true,
    }
);

module.exports = model("contact", DefaultSchema);
