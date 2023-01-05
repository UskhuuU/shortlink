const { model, Schema } = require("mongoose");


const LinkScheme = new Schema({
    URL: String, 
    shortURL: String,
    registerDate: { type: Date, default: Date.now},
});


const LinkModel = model("Link", LinkScheme);

module.exports = LinkModel;