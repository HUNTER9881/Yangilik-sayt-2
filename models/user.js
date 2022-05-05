const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const DefaultSchema = Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true, },
        password: { type: String, required: true },
        role: {type: String, required: true, enum: ["admin", "moderator", "user"]}
    },
    {
        timestamps: true,
    }
);


DefaultSchema.pre('save', async function (next) {
    if(!this.isModified('password')){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)

})

module.exports = model("user", DefaultSchema);
