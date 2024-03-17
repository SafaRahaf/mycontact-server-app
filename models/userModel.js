const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add the Username"]
    },
    email: {
        type: String,
        required: [true, "Please add the User Email"],
        unique: [true, "This Email is Already Taken"]
    },
    password: {
        type: String,
        required: [true, "Please add the User Password"]
    },
},{
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);
