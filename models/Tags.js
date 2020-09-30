const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tagSchema = new Schema({
    label: {
        type: String,
        required: true,
        unique: true,
    }
});

const Tag = mongoose.model("Tag", tagSchema);

module.exports = Tag;