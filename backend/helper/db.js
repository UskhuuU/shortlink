const mongoose = require("mongoose");
const uri = "mongodb+srv://Uskhuuu:nadadhamaagui1@cluster0.t6gzlds.mongodb.net/?retryWrites=true&w=majority";

mongoose.set('strictQuery', false);
const connect= async () => {
    try {
        await mongoose.connect(uri);
        console.log(("database is connected"));
    } catch(error) {
        console.log(error);
    }
};

module.exports = connect;
